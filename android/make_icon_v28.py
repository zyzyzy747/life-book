#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
生活手账 · App 图标生成 v2.8 配色版（免设计软件，纯 PIL + numpy）

v2.8 之前图标沿用旧 aurora 主题的紫蓝渐变（#7B8CFF → #B06BFF），
与现在的「暖调近黑 + 唯一琥珀强调色」完全脱节。这里整体换色，
并保证图形在 48dp（mdpi）下依然认得出来。

做法：1024 画布 4 倍超采样 → PIL 画矢量形状 → LANCZOS 缩回。
      比走浏览器渲染 SVG 更可控（不用起 HTTP 服务、不占 Playwright 实例）。

配色（与 index.html 的 :root 令牌一一对应，改主题时这里同步改）：
    --bg    #0C0B0A  暖调近黑（图标底比它略亮一点，避免死黑一块）
    --brand #FF9F1C  琥珀，唯一强调色
    --text  #F5F0E8  暖调近白

用法：
    python make_icon_v28.py --preview           # 只出对比图，不写 res/
    python make_icon_v28.py --preview D E       # 只看指定方案
    python make_icon_v28.py E                   # 生成设计 E 到 res/
"""
import math
import os
import sys

import numpy as np
from PIL import Image, ImageDraw

sys.stdout.reconfigure(encoding="utf-8")

PROJ = r"D:\work\workbuddy\life-book-android"
ICON = os.path.join(PROJ, "icon")
RES = os.path.join(PROJ, "app", "src", "main", "res")

BASE = 1024
SS = 4
S = BASE * SS

BG_TOP = (26, 21, 17)
BG_BOT = (9, 8, 7)
AMBER = (255, 159, 28)
AMBER_2 = (232, 137, 12)
CREAM = (245, 240, 232)

CORNER = 190
DENS = {"mdpi": 1, "hdpi": 1.5, "xhdpi": 2, "xxhdpi": 3, "xxxhdpi": 4}
LEGACY_BASE, FG_BASE = 48, 108
FG_SCALE = 0.62          # 自适应前景缩放：图形落在中心 66/108 安全区内


# ---------------------------------------------------------------- 底色
def bg_gradient(size=S):
    yy, xx = np.mgrid[0:size, 0:size].astype(np.float32)
    t = ((xx / (size - 1)) * 0.58 + (yy / (size - 1)) * 0.42)[..., None]
    a = np.array(BG_TOP, dtype=np.float32)[None, None, :]
    b = np.array(BG_BOT, dtype=np.float32)[None, None, :]
    rgb = a + (b - a) * t
    # 中心偏上一团极淡琥珀辉光：没有它，琥珀图形贴在纯黑上会有「贴纸」感。
    # ⚠ 位置必须居中偏上，不能偏左上 —— 圆形遮罩会切掉四角，光源偏一侧时
    #    对角的两块亮度差会被放大成「左上亮 / 右下黑」的脏感。
    gx, gy = size * 0.5, size * 0.34
    r = np.sqrt((xx - gx) ** 2 + (yy - gy) ** 2) / (size * 0.86)
    glow = (np.clip(1.0 - r, 0.0, 1.0) ** 2.4 * 0.13)[..., None]
    rgb = rgb + (np.array(AMBER, dtype=np.float32)[None, None, :] - rgb) * glow
    arr = np.clip(rgb, 0, 255).astype(np.uint8)
    return Image.fromarray(arr, "RGB").convert("RGBA")


def amber_grad_layer(size, mask):
    """把琥珀渐变按 mask 贴上（给描边上渐变；PIL 的 line 没有渐变能力）。"""
    yy, xx = np.mgrid[0:size, 0:size].astype(np.float32)
    t = ((xx / (size - 1)) * 0.5 + (yy / (size - 1)) * 0.5)[..., None]
    a = np.array(AMBER, dtype=np.float32)[None, None, :]
    b = np.array(AMBER_2, dtype=np.float32)[None, None, :]
    rgb = a + (b - a) * t
    layer = Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8), "RGB").convert("RGBA")
    layer.putalpha(mask)
    return layer


# ---------------------------------------------------------------- 画笔
class Pen:
    """坐标按 1024 写，内部自动乘超采样倍数。

    按颜色分流到两张图层：琥珀图层最后叠渐变，暖白图层原样贴。
    这样暖白线条不会被染成琥珀（第一版就踩了这个坑）。
    """

    def __init__(self):
        self.amber = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        self.cream = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        self.da = ImageDraw.Draw(self.amber)
        self.dc = ImageDraw.Draw(self.cream)

    def _d(self, color):
        if tuple(color[:3]) == AMBER:
            return self.da
        if tuple(color[:3]) == CREAM:
            return self.dc
        raise ValueError("颜色未分流：%r（只有琥珀/暖白会走图层分离）" % (color,))

    @staticmethod
    def _p(pts):
        if isinstance(pts[0], (tuple, list)):
            return [(x * SS, y * SS) for x, y in pts]
        return [v * SS for v in pts]

    def rect(self, box, radius, color, width):
        self._d(color).rounded_rectangle(self._p(box), radius=radius * SS,
                                         outline=color, width=int(width * SS))

    def line(self, pts, color, width):
        d = self._d(color)
        d.line(self._p(pts), fill=color, width=int(width * SS), joint="curve")
        # line 的圆头在斜角处会缺一小块，手动补端点圆
        r = width * SS / 2.0
        for x, y in self._p(pts):
            d.ellipse([x - r, y - r, x + r, y + r], fill=color)

    def arc(self, cx, cy, rad, start, end, color, width):
        self._d(color).arc(self._p([cx - rad, cy - rad, cx + rad, cy + rad]),
                           start, end, fill=color, width=int(width * SS))

    def dot(self, cx, cy, rad, color):
        self._d(color).ellipse(self._p([cx - rad, cy - rad, cx + rad, cy + rad]), fill=color)

    def compose_on(self, img):
        img.alpha_composite(amber_grad_layer(S, self.amber.getchannel("A")))
        img.alpha_composite(self.cream)
        return img


# ---------------------------------------------------------------- 三个候选
def design_D():
    """琥珀手账：书本轮廓 + 琥珀书脊与勾 + 半透明暖白内容线。语义最直白。"""
    p = Pen()
    p.rect([268, 216, 756, 808], 84, CREAM + (235,), 44)
    p.line([(500, 404), (664, 404)], CREAM + (118,), 34)
    p.line([(500, 500), (612, 500)], CREAM + (88,), 34)
    p.line([(406, 300), (406, 724)], AMBER + (255,), 40)
    p.line([(492, 622), (556, 686), (688, 546)], AMBER + (255,), 52)
    return p


def design_E():
    """记录星环：呼应首页那圈记录环。12 段里 5 段点亮成琥珀。
    特征最强，线给得比 D 粗以抗小尺寸糊。"""
    p = Pen()
    rad, wid = 292, 58
    step, gap = 360.0 / 12, 11.0
    for i in range(12):
        col = AMBER + (255,) if 2 <= i <= 6 else CREAM + (56,)
        p.arc(512, 512, rad, -90 + i * step + gap / 2, -90 + (i + 1) * step - gap / 2,
              col, wid)
    p.line([(432, 520), (492, 580), (610, 452)], CREAM + (245,), 60)
    return p


def design_F():
    """极简条目：三条长短不一的暖白记录行 + 右下一枚琥珀圆点（今天）。
    最抽象，但 48dp 下最干净，也最像「一本手账内页」。"""
    p = Pen()
    p.rect([262, 268, 762, 756], 76, CREAM + (228,), 44)
    p.line([(350, 400), (664, 400)], CREAM + (120,), 38)
    p.line([(350, 506), (580, 506)], CREAM + (92,), 38)
    p.line([(350, 612), (488, 612)], CREAM + (66,), 38)
    p.dot(634, 612, 58, AMBER + (255,))
    return p


DESIGNS = {"D": design_D, "E": design_E, "F": design_F}


# ---------------------------------------------------------------- 合成
def down(img):
    return img.resize((BASE, BASE), Image.LANCZOS)


def square_mask(size=BASE, radius=CORNER):
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1],
                                        radius=radius, fill=255)
    return m


def circle_mask(size=BASE):
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).ellipse([0, 0, size - 1, size - 1], fill=255)
    return m


def make_assets(key):
    """产出（圆角方形图, 圆形图, 自适应前景透明图）。"""
    pen = DESIGNS[key]()
    full = pen.compose_on(bg_gradient())
    full = down(full)

    sq = Image.new("RGBA", (BASE, BASE), (0, 0, 0, 0))
    sq.paste(full, (0, 0), square_mask())
    ci = Image.new("RGBA", (BASE, BASE), (0, 0, 0, 0))
    ci.paste(full, (0, 0), circle_mask())

    fg_canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    sh = int(S * FG_SCALE)
    fg_canvas.alpha_composite(pen.amber.resize((sh, sh), Image.LANCZOS),
                              ((S - sh) // 2, (S - sh) // 2))
    fg_canvas.alpha_composite(pen.cream.resize((sh, sh), Image.LANCZOS),
                              ((S - sh) // 2, (S - sh) // 2))
    return sq, ci, down(fg_canvas)


# ---------------------------------------------------------------- 预览
def preview(keys):
    pad, cell, gap = 30, 250, 22
    W = pad + len(keys) * (cell * 3 + gap) + pad
    H = pad + cell + 34 + 210 + pad + 44
    sheet = Image.new("RGB", (W, H), (23, 21, 19))
    d = ImageDraw.Draw(sheet)
    sq_m, ci_m = square_mask(), circle_mask()

    for ci_i, key in enumerate(keys):
        lg_sq, lg_ci, fg = make_assets(key)
        x0 = pad + ci_i * (cell * 3 + gap)
        for mi, (im, cap) in enumerate(((lg_sq, "squircle"), (lg_ci, "circle"),
                                        (None, "adaptive"))):
            x, y = x0 + mi * cell, pad
            d.rectangle([x - 2, y - 2, x + cell - 1, y + cell - 1], outline=(56, 52, 48))
            if im is not None:
                t = im.resize((cell, cell), Image.LANCZOS)
                sheet.paste(t, (x, y), t)
            else:
                # 自适应：108dp 画布里居中 72dp，底 = drawable 的暖黑渐变
                plate = down(bg_gradient()).resize((cell, cell), Image.LANCZOS)
                plate.putalpha(sq_m.resize((cell, cell), Image.LANCZOS))
                f = fg.resize((int(cell * 108 / 72),) * 2, Image.LANCZOS)
                plate.alpha_composite(f, ((plate.width - f.width) // 2,
                                          (plate.height - f.height) // 2))
                sheet.paste(plate, (x, y), plate)
            d.text((x + 6, y + cell + 9), "%s · %s" % (key, cap), fill=(146, 138, 128))

        y = pad + cell + 46
        d.text((x0, y - 18), "小尺寸可读性", fill=(146, 138, 128))
        for si, (n, zoom) in enumerate(((48, 4), (72, 3), (96, 2))):
            t = lg_sq.resize((n, n), Image.LANCZOS).resize((n * zoom,) * 2, Image.NEAREST)
            sheet.paste(t, (x0 + si * (n * zoom + 20), y), t)
            d.text((x0 + si * (n * zoom + 20), y + n * zoom + 6), "%ddp" % n,
                   fill=(146, 138, 128))

    d.text((pad, H - 32), "life-book icon · #0C0B0A base / #FF9F1C amber / #F5F0E8 ink",
           fill=(118, 110, 100))
    out = os.path.join(ICON, "icons_v28_sim.png")
    sheet.save(out)
    print("   预览：%s" % out)
    return out


# ---------------------------------------------------------------- 写 res
def write_res(legacy_sq, fg):
    for d, k in DENS.items():
        folder = os.path.join(RES, "mipmap-" + d)
        os.makedirs(folder, exist_ok=True)
        n = int(round(LEGACY_BASE * k))
        legacy_sq.convert("RGB").resize((n, n), Image.LANCZOS) \
            .save(os.path.join(folder, "ic_launcher.png"), optimize=True)
        m = int(round(FG_BASE * k))
        fg.resize((m, m), Image.LANCZOS).save(os.path.join(folder, "ic_launcher_fg.png"),
                                               optimize=True)
        print("   mipmap-%-7s legacy %3dpx / fg %3dpx" % (d, n, m))

    path = os.path.join(RES, "drawable", "ic_launcher_bg.xml")
    with open(path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write('<?xml version="1.0" encoding="utf-8"?>\n'
                 '<!-- 应用图标底色：与页面 bg 令牌一致（左上偏暖 → 右下压深） -->\n'
                 '<shape xmlns:android="http://schemas.android.com/apk/res/android">\n'
                 '    <gradient\n'
                 '        android:type="linear"\n'
                 '        android:angle="315"\n'
                 '        android:startColor="#1A1511"\n'
                 '        android:endColor="#090807" />\n'
                 '</shape>\n')
    print("   drawable/ic_launcher_bg.xml（暖调近黑）")


def main():
    args = sys.argv[1:]
    if args and args[0] == "--preview":
        keys = [k.upper() for k in args[1:]] or list(DESIGNS)
        bad = [k for k in keys if k not in DESIGNS]
        if bad:
            raise SystemExit("未知方案：%s（可选 %s）" % (bad, "/".join(DESIGNS)))
        print("== 生活手账 · 图标 v2.8 配色预览 ==")
        preview(keys)
        return
    if not args:
        raise SystemExit("用法：python make_icon_v28.py --preview [D|E|F] | python make_icon_v28.py D")
    key = args[0].upper()
    if key not in DESIGNS:
        raise SystemExit("未知方案：%s（可选 %s）" % (key, "/".join(DESIGNS)))
    print("== 生活手账 · 图标 v2.8 配色（设计 %s）==" % key)
    sq, _ci, fg = make_assets(key)
    write_res(sq, fg)
    print("   完成，跑 build.py 重新打包即可")


if __name__ == "__main__":
    main()
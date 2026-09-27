#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
生活手账 · App 图标生成（免设计软件）

思路：
  1. 用 SVG 画图形（矢量、白描边、品牌渐变底），浏览器渲染成 1024 PNG —— 边缘干净
  2. 缩放出 Android 各 dpi 的 mipmap（传统图标 + 自适应前景）
  3. 自适应前景要透明底：把渲染背景设成品红 #FF00FF，
     因为「白(255,255,255)」与「品红(255,0,255)」只有 G 通道不同，
     抗锯齿像素的 alpha 可以精确反推 alpha = G/255（R/B 恒为 255）—— 边缘不会发白边
  4. 背景用 vector drawable 渐变（矢量、不占体积）

用法：
    python make_icon.py A|B|C          # 生成图标资源到 res/
    python make_icon.py A --preview     # 只渲染对比图，不写 res
"""
import os
import shutil
import subprocess
import sys
import time

from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")

PROJ = r"D:\work\workbuddy\life-book-android"
ICON = os.path.join(PROJ, "icon")
RES = os.path.join(PROJ, "app", "src", "main", "res")
NODE_DIR = r"C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2-3"
NODE_MODULES = r"C:\Users\Administrator\.workbuddy\binaries\node\workspace\node_modules"
PY = sys.executable
PORT = 8789

# 品牌渐变（与页面默认主题 aurora 一致）
C1, C2 = "#7B8CFF", "#B06BFF"
# 传统图标圆角（1024 画布上）
CORNER = 190
# 各 dpi 尺寸
DENS = {"mdpi": 1, "hdpi": 1.5, "xhdpi": 2, "xxhdpi": 3, "xxxhdpi": 4}
LEGACY_BASE, FG_BASE = 48, 108

# ---------------------------------------------------------------- 图形（只画白色部分）
SHAPES = {
    "A": """  <g fill="none" stroke="#ffffff" stroke-width="46" stroke-linecap="round" stroke-linejoin="round">
    <rect x="268" y="216" width="488" height="592" rx="84"/>
    <path d="M406 296v432"/>
    <path d="M496 412h168M496 512h112"/>
    <path d="M496 640l62 60 128-138"/>
  </g>""",
    "B": """  <g fill="none" stroke="#ffffff" stroke-width="46" stroke-linecap="round" stroke-linejoin="round">
    <rect x="238" y="272" width="548" height="504" rx="88"/>
    <path d="M396 198v112M628 198v112"/>
    <path d="M238 412h548"/>
    <circle cx="404" cy="528" r="38" fill="#ffffff" stroke="none"/>
    <circle cx="620" cy="528" r="38" fill="#ffffff" stroke="none"/>
    <circle cx="404" cy="660" r="38" fill="#ffffff" stroke="none"/>
    <path d="M566 656l46 46 100-108"/>
  </g>""",
    "C": """  <circle cx="512" cy="512" r="286" fill="none" stroke="#ffffff" stroke-width="48"/>
  <path d="M512 676C428 610 352 550 352 468c0-60 48-104 104-104 27 0 49 12 56 30 7-18 29-30 56-30 56 0 104 44 104 104 0 82-76 142-160 208z" fill="#ffffff"/>""",
}

GRAD = ('<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="{C1}"/><stop offset="1" stop-color="{C2}"/></linearGradient>')


def svg_full(shape):
    return (f'<svg viewBox="0 0 1024 1024" width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">'
            f'<defs>{GRAD}</defs><rect width="1024" height="1024" fill="url(#g)"/>\n{shape}\n</svg>')


def svg_fg(shape):
    # 自适应图标前景：系统会把 108dp 裁到中间 72dp 显示，圆形启动器形状还会切掉四角。
    # 图形实际跨度是画布对角方向 ~75dp，必须缩到 0.86 才能完整落在 66dp 安全区内。
    return (f'<svg viewBox="0 0 1024 1024" width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">'
            f'<g transform="translate(512,512) scale(0.86) translate(-512,-512)">\n{shape}\n</g></svg>')


def write_html(key):
    """生成渲染用页面：#full（渐变底 + 圆角）与 #fg（品红底，供抠 alpha）"""
    html = f"""<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{{margin:0;background:#FF00FF}}
  #full,#fg{{width:1024px;height:1024px;display:block}}
  #full{{border-radius:{CORNER}px;overflow:hidden;margin-bottom:40px}}
  svg{{display:block}}
</style></head><body>
<div id="full">{svg_full(SHAPES[key])}</div>
<div id="fg">{svg_fg(SHAPES[key])}</div>
</body></html>"""
    p = os.path.join(ICON, "icon_gen.html")
    with open(p, "w", encoding="utf-8") as fh:
        fh.write(html)
    return p


def pw(*args):
    env = dict(os.environ)
    env["NODE_PATH"] = NODE_MODULES
    env["PATH"] = os.path.join(NODE_DIR, "") + os.pathsep + env.get("PATH", "")
    cmd = f'"{os.path.join(NODE_DIR, "npx.cmd")}" -y @playwright/cli@latest ' + " ".join(args)
    return subprocess.run(cmd, shell=True, capture_output=True, text=True,
                          encoding="utf-8", errors="replace", env=env)


def render(key):
    write_html(key)
    srv = subprocess.Popen([PY, "-m", "http.server", str(PORT), "--bind", "127.0.0.1"],
                           cwd=ICON, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(2)
    try:
        pw("close")
        p = pw("open", f"http://127.0.0.1:{PORT}/icon_gen.html", "--browser=msedge")
        print("   open:", (p.stdout or "").strip().splitlines()[-1] if p.stdout else "?")
        time.sleep(3)
        pw("resize", "1200", "2300")
        time.sleep(2)
        outs = {}
        for tag in ("full", "fg"):
            f = os.path.join(ICON, f"_gen_{tag}.png")
            if os.path.exists(f):
                os.remove(f)
            pw("screenshot", f"#{tag}", f"--filename={f}")
            ok = os.path.exists(f)
            print("   %-5s %s" % (tag, "ok" if ok else "FAILED"))
            if not ok:
                raise SystemExit("渲染失败：" + tag)
            outs[tag] = f
        return outs
    finally:
        pw("close")
        srv.terminate()
        for junk in (".playwright-cli",):
            shutil.rmtree(os.path.join(ICON, junk), ignore_errors=True)


def fg_to_alpha(src, dst):
    """品红底 → 透明底（alpha = G 通道）"""
    im = Image.open(src).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            px[x, y] = (255, 255, 255, g)
    im.save(dst)
    return dst


def write_res(legacy_png, fg_png):
    for d, k in DENS.items():
        folder = os.path.join(RES, "mipmap-" + d)
        os.makedirs(folder, exist_ok=True)
        n = int(round(LEGACY_BASE * k))
        Image.open(legacy_png).convert("RGB").resize((n, n), Image.LANCZOS) \
            .save(os.path.join(folder, "ic_launcher.png"), optimize=True)
        m = int(round(FG_BASE * k))
        Image.open(fg_png).resize((m, m), Image.LANCZOS) \
            .save(os.path.join(folder, "ic_launcher_fg.png"), optimize=True)
        print("   mipmap-%-7s legacy %3dpx / fg %3dpx" % (d, n, m))

    dr = os.path.join(RES, "drawable")
    os.makedirs(dr, exist_ok=True)
    with open(os.path.join(dr, "ic_launcher_bg.xml"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write('<?xml version="1.0" encoding="utf-8"?>\n'
                 '<!-- 应用图标底色：与页面主题一致的品牌渐变（左上→右下） -->\n'
                 '<shape xmlns:android="http://schemas.android.com/apk/res/android">\n'
                 '    <gradient\n'
                 '        android:type="linear"\n'
                 '        android:angle="315"\n'
                 f'        android:startColor="{C1}"\n'
                 f'        android:endColor="{C2}" />\n'
                 '</shape>\n')

    anydpi = os.path.join(RES, "mipmap-anydpi-v26")
    os.makedirs(anydpi, exist_ok=True)
    with open(os.path.join(anydpi, "ic_launcher.xml"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write('<?xml version="1.0" encoding="utf-8"?>\n'
                 '<!-- 自适应图标：矢量渐变底 + 白色前景；monochrome 供 Android 13+ 主题图标 -->\n'
                 '<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n'
                 '    <background android:drawable="@drawable/ic_launcher_bg" />\n'
                 '    <foreground android:drawable="@mipmap/ic_launcher_fg" />\n'
                 '    <monochrome android:drawable="@mipmap/ic_launcher_fg" />\n'
                 '</adaptive-icon>\n')
    print("   drawable/ic_launcher_bg.xml + mipmap-anydpi-v26/ic_launcher.xml")


def main():
    key = (sys.argv[1] if len(sys.argv) > 1 else "A").upper()
    if key not in SHAPES:
        raise SystemExit("用法：python make_icon.py A|B|C [--preview]")
    print("== 生活手账 · 图标生成（设计 %s）==" % key)
    outs = render(key)
    print("   渲染完成：1024×1024")
    if "--preview" in sys.argv:
        print("   （--preview 模式，不写 res/）")
        return
    alpha = fg_to_alpha(outs["fg"], os.path.join(ICON, "_gen_fg_alpha.png"))
    write_res(outs["full"], alpha)
    print("== 完成 ==  图标已写入 res/，跑 build.py 重新打包即可")


if __name__ == "__main__":
    main()

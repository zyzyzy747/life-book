#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
生活手账 Android 外壳的一键打包脚本。

刻意不走 Gradle：这个壳没有任何第三方依赖（不用 androidx，主题用系统 Material），
用 build-tools 里的 aapt2 / d8 / zipalign / apksigner 直接产出 APK，
省掉 Gradle 发行包和整套 maven 依赖的下载，构建只要几秒。

用法：  python build.py
产物：  build/life-book.apk  (已用自签名证书签名，可直接安装)
"""
import os
import re
import shutil
import subprocess
import sys
import zipfile

sys.stdout.reconfigure(encoding="utf-8")

# 路径都可用环境变量覆盖，换机器不用改代码
SDK = os.environ.get("ANDROID_SDK", r"D:\android-sdk")
BT = os.path.join(SDK, "build-tools", "35.0.0")
ANDROID_JAR = os.path.join(SDK, "platforms", "android-35", "android.jar")
JAVA_HOME = os.environ.get("JAVA_HOME", r"D:\jdk21")

PROJ = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(PROJ, "app")
SRC = os.path.join(APP, "src", "main")
BUILD = os.path.join(PROJ, "build")

KS = os.path.join(PROJ, "life-book.jks")
# keystore 口令不进仓库：本地先 set LIFEBOOK_KS_PASS=*** 再跑
KS_PASS = os.environ.get("LIFEBOOK_KS_PASS", "")
KS_ALIAS = os.environ.get("LIFEBOOK_KS_ALIAS", "lifebook")

VERSION_CODE = "5"
VERSION_NAME = "1.4"
MIN_SDK = "26"
TARGET_SDK = "35"

ENV = dict(os.environ)
ENV["JAVA_HOME"] = JAVA_HOME
ENV["PATH"] = os.path.join(JAVA_HOME, "bin") + os.pathsep + ENV.get("PATH", "")


def tool(name):
    p = os.path.join(BT, name)
    if not os.path.exists(p):
        raise SystemExit("找不到构建工具：" + p)
    return p


def run(cmd, ok_codes=(0,), quiet=False):
    if not quiet:
        print("   $", os.path.basename(cmd[0]), " ".join(
            ('"%s"' % a if " " in a else a) for a in cmd[1:6]))
    p = subprocess.run(cmd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace", env=ENV)
    if p.returncode not in ok_codes:
        print("--- stdout ---")
        print((p.stdout or "")[-4000:])
        print("--- stderr ---")
        print((p.stderr or "")[-4000:])
        raise SystemExit("构建失败：%s (rc=%s)" % (os.path.basename(cmd[0]), p.returncode))
    return p


def collect(root, exts):
    out = []
    for base, _dirs, files in os.walk(root):
        for f in files:
            if f.lower().endswith(exts):
                out.append(os.path.join(base, f))
    return sorted(out)


def main():
    print("== 生活手账 Android 打包 ==")
    for p, what in [(ANDROID_JAR, "android.jar"), (BT, "build-tools 35.0.0"),
                    (os.path.join(JAVA_HOME, "bin", "javac.exe"), "javac")]:
        if not os.path.exists(p):
            raise SystemExit("缺少 %s：%s" % (what, p))
    print("   环境检查通过")
    if not KS_PASS:
        raise SystemExit("请先设置环境变量 LIFEBOOK_KS_PASS（keystore 口令）再打包；"
                         "首次运行会按下面的参数自动生成一个自签名证书")
    if os.path.isdir(BUILD):
        shutil.rmtree(BUILD, ignore_errors=True)
    os.makedirs(BUILD)
    gen = os.path.join(BUILD, "gen")
    classes = os.path.join(BUILD, "classes")
    dexout = os.path.join(BUILD, "dex")
    for d in (gen, classes, dexout):
        os.makedirs(d)

    # ---------- 1. 编译资源 ----------
    print("[1/6] aapt2 compile 编译资源")
    res_zip = os.path.join(BUILD, "res.zip")
    run([tool("aapt2.exe"), "compile", "--dir", os.path.join(SRC, "res"), "-o", res_zip])

    # ---------- 2. 链接资源，产出带资源的 APK 骨架 + R.java ----------
    print("[2/6] aapt2 link 链接资源")
    base_apk = os.path.join(BUILD, "base.apk")
    run([tool("aapt2.exe"), "link",
         "-o", base_apk,
         "-I", ANDROID_JAR,
         "--manifest", os.path.join(SRC, "AndroidManifest.xml"),
         "-R", res_zip,
         "--java", gen,
         "--min-sdk-version", MIN_SDK,
         "--target-sdk-version", TARGET_SDK,
         "--version-code", VERSION_CODE,
         "--version-name", VERSION_NAME,
         "--auto-add-overlay"])

    # ---------- 3. 编译 Java ----------
    print("[3/6] javac 编译源码")
    sources = collect(os.path.join(SRC, "java"), (".java",)) + collect(gen, (".java",))
    if not sources:
        raise SystemExit("没有找到任何 .java 源文件")
    arg_file = os.path.join(BUILD, "sources.txt")
    with open(arg_file, "w", encoding="utf-8") as fh:
        fh.write("\n".join(sources))
    run([os.path.join(JAVA_HOME, "bin", "javac.exe"),
         "-source", "11", "-target", "11",
         "-encoding", "UTF-8",
         "-nowarn",
         "-classpath", ANDROID_JAR,
         "-d", classes,
         "@" + arg_file])

    # ---------- 4. 转 dex ----------
    print("[4/6] d8 转成 classes.dex")
    class_files = collect(classes, (".class",))
    if not class_files:
        raise SystemExit("javac 没有产出 class 文件")
    run([tool("d8.bat"), "--release", "--min-api", MIN_SDK,
         "--lib", ANDROID_JAR, "--output", dexout] + class_files)
    dex = os.path.join(dexout, "classes.dex")
    if not os.path.exists(dex):
        raise SystemExit("d8 没有产出 classes.dex")
    print("        dex 大小 %.1f KB" % (os.path.getsize(dex) / 1024.0))

    # ---------- 5. 打包 + 对齐 ----------
    print("[5/6] 写入 dex 并 zipalign 对齐")
    with zipfile.ZipFile(base_apk, "a", zipfile.ZIP_DEFLATED) as z:
        z.write(dex, "classes.dex")
    aligned = os.path.join(BUILD, "aligned.apk")
    run([tool("zipalign.exe"), "-f", "-p", "4", base_apk, aligned])

    # ---------- 6. 签名 ----------
    print("[6/6] apksigner 签名")
    if not os.path.exists(KS):
        print("       生成自签名证书 life-book.jks（有效期 30 年）")
        run([os.path.join(JAVA_HOME, "bin", "keytool.exe"),
             "-genkeypair", "-v",
             "-keystore", KS,
             "-alias", KS_ALIAS,
             "-keyalg", "RSA", "-keysize", "2048",
             "-validity", "10950",
             "-storepass", KS_PASS,
             "-keypass", KS_PASS,
             "-dname", "CN=LifeBook, OU=Personal, O=LifeBook, L=Wuhan, ST=Hubei, C=CN"],
            quiet=True)

    out_apk = os.path.join(BUILD, "life-book.apk")
    run([tool("apksigner.bat"), "sign",
         "--ks", KS,
         "--ks-key-alias", KS_ALIAS,
         "--ks-pass", "pass:" + KS_PASS,
         "--key-pass", "pass:" + KS_PASS,
         "--v1-signing-enabled", "true",
         "--v2-signing-enabled", "true",
         "--out", out_apk,
         aligned])

    # ---------- 校验 ----------
    print()
    print("== 校验 ==")
    p = run([tool("apksigner.bat"), "verify", "--print-certs", "-v", out_apk])
    for line in (p.stdout or "").splitlines():
        if re.search(r"Verified using|Signer #1 certificate DN|number of signers", line):
            print("   " + line.strip())

    p = run([tool("aapt2.exe"), "dump", "badging", out_apk])
    keep = re.compile(r"^(package|sdkVersion|targetSdkVersion|application-label|uses-permission|launchable-activity)")
    for line in (p.stdout or "").splitlines():
        if keep.match(line):
            print("   " + line.strip())

    size = os.path.getsize(out_apk)
    print()
    print("== 完成 ==")
    print("   %s" % out_apk)
    print("   %.2f MB" % (size / 1024.0 / 1024.0))


if __name__ == "__main__":
    main()

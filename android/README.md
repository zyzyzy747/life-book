# Android 壳

一个 WebView 空壳：原生只做两件事 —— 加载线上页面，补上网页拿不到的能力。

## 为什么不用 Gradle

这个壳没有任何第三方依赖（不用 androidx，主题直接用系统 Material）。
`build.py` 直接调 build-tools 里的 `aapt2` / `d8` / `zipalign` / `apksigner`，
省掉 Gradle 发行包和整套 maven 依赖的下载，构建只要几秒。

## 环境要求

- JDK 11+（默认找 `D:\jdk21`，可用 `JAVA_HOME` 覆盖）
- Android SDK，需 `build-tools;35.0.0` 和 `platforms;android-35`
  （默认找 `D:\android-sdk`，可用 `ANDROID_SDK` 覆盖）

## 打包

```bat
set LIFEBOOK_KS_PASS=<你的 keystore 口令>
python build.py
```

产物在 `build/life-book.apk`，已签名可直接安装。
`life-book.jks` 不存在时会用同一口令自动生成一个自签名证书（有效期 30 年）。

## 原生部分做了什么

| 能力 | 位置 | 说明 |
|---|---|---|
| 步数 | `StepReader.java` | 读 `TYPE_STEP_COUNTER`，通过 JS 桥暴露给页面 —— H5 自己在浏览器里拿不到步数 |
| 文件选择 | `MainActivity` | 手写 `WebChromeClient.onShowFileChooser`：`ACTION_GET_CONTENT` + `CATEGORY_OPENABLE`，`setAllowContentAccess(true)`，`onActivityResult` 回填。**不能按 accept 过滤**，否则没有扩展名的备份文件选不中 |
| 版本号 | `MainActivity.verName()` | 同时注入 UA 和 JS 桥方法，页面能显示「应用版本 v1.5」，用来判断用户装的是哪一版 |
| 每日提醒 | `AlarmReceiver` / `BootReceiver` | 定时提醒 + 开机重排闹钟 |

## 两个刻意为之的点

- **入口 URL 每天换一次缓存键**（`?app=1&d=20260928`，见 `MainActivity.homeUrl()`）：
  CDN 按**完整 URL（含 query）**做缓存键，而且**每台边缘节点各持一份副本、TTL 长到十几个
  小时都不回源** —— 只加一个固定参数（`?app=1`）只是把脏键从 `/` 挪到 `/?app=1`，
  照样被旧副本占住，用户 App 里就一直是旧页面。让参数跟着当天日期走：当天首次打开必然
  回源拿到最新，同一天内再打开仍走缓存，以后改页面**最迟第二天自动生效、不用重装**。
- **空壳加载线上页面** ⇒ 改网页不用重发 APK；只有动到原生能力（比如文件选择）才需要重装。
  这一点也让「版本号」变得重要：页面能读到壳的版本，才能提示用户「你装的是旧版」，
  并给出重新下载安装包的入口。

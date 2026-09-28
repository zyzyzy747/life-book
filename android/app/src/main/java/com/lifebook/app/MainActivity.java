package com.lifebook.app;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * 生活手账的外壳。
 *
 * 页面本体仍然部署在服务器上（改代码不用重装 App），这个壳只负责三件事：
 *  1. 全屏 WebView 承载页面（去掉浏览器地址栏，像原生应用）
 *  2. 读手机自己的计步传感器，把「今日步数」通过 JS 桥交给页面写库
 *  3. 页面可以反调 LBApp.calibrate()，把「今天的起点」对齐到真实步数
 *     （安卓不给第三方读系统健康数据，装机当天只能靠这一次校准）
 *  4. 加载失败时给一个能重试的友好提示，而不是白屏
 */
public class MainActivity extends Activity {

    /** 站点域名。判断站内跳转用，站外链接丢给系统浏览器。 */
    private static final String HOST = "life-book-18142.app.workbuddy.host";
    /**
     * 壳打开的入口地址：`?app=1` + **当天的日期**。
     *
     * ⛔ 为什么参数必须跟着日期变：CDN 是腾讯 EdgeOne，它把**完整 URL（含 query）**
     * 当缓存键，而且**每台边缘节点各持一份独立副本**、TTL 长到十几个小时都不回源。
     * 实测同一个 `/?app=1` 连发 8 次：7 次命中前一天那份旧页面（`Eo-Cache-Status: HIT`、
     * `Last-Modified` 还是部署前一天），只有 1 次落在已更新的节点上；而带随机 query 的
     * 请求 100% 回源拿到新版。固定参数救不了 —— 那条键已经被旧副本占了，CDN 又没有
     * 清理接口。所以让缓存键**每天换一次**：
     *
     *   · 当天第一次打开 → 新键 → 必然 MISS 回源 → 一定是最新页面
     *   · 同一天内再打开 → 同一个键 → 走缓存 → 秒开
     *   · 以后改页面 → 最迟第二天自动生效，**不用再重装 App**（这是本文件存在的意义）
     */
    private String homeUrl() {
        String day = new SimpleDateFormat("yyyyMMdd", Locale.US).format(new Date());
        return "https://" + HOST + "/?app=1&d=" + day;
    }

    /** 和页面一致的深色底，避免加载时白闪。 */
    private static final int BG = 0xFF0B0D13;

    private static final int REQ_ACTIVITY = 1001;
    private static final int REQ_FILE = 1002;

    private FrameLayout root;
    private WebView web;
    private LinearLayout offline;

    /** 网页里 <input type=file> 的待回填回调（导入备份 / 换头像都会用到）。 */
    private ValueCallback<Uri[]> filePathCallback;

    private boolean pageReady = false;
    private int pendingSteps = -1;
    private String pendingDate = "";
    /** 今天的起点没拿到（首次安装 / 断档），页面会提示用户校准一次。 */
    private boolean pendingFresh = false;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);

        root = new FrameLayout(this);
        root.setBackgroundColor(BG);
        setContentView(root);

        web = new WebView(this);
        web.setBackgroundColor(BG);
        root.addView(web, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));
        configure(web);

        buildOffline();

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().setStatusBarColor(BG);
            getWindow().setNavigationBarColor(BG);
        }
        applyInsets();

        web.loadUrl(homeUrl());

        StepReader.ensureScheduled(this);
        askPermission();
    }

    @SuppressWarnings("SetJavaScriptEnabled")
    private void configure(WebView w) {
        WebSettings s = w.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= 21) {
            s.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        }
        if (Build.VERSION.SDK_INT >= 26) {
            s.setSafeBrowsingEnabled(false);
        }
        s.setUserAgentString(s.getUserAgentString() + " LifeBookApp/" + verName(this));

        // 页面只需要读自己的线上站点，本地文件访问一律关掉，缩小 JS 桥的攻击面。
        // content 访问要留着：用户从系统选择器挑回来的备份文件是 content:// URI，
        // 关掉它 WebView 就读不到文件内容。线上 https 页面本身也够不到 content://。
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);

        // 页面 → 原生：只暴露「校准」这一个动作
        w.addJavascriptInterface(new Bridge(), "LBApp");

        // ⛔ 网页里的 <input type=file> 默认点了**完全没反应**：WebView 不会自己弹选择器，
        //    必须由 App 实现 onShowFileChooser 转交系统选择器，否则连权限框都不会出现。
        w.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> cb,
                                             FileChooserParams params) {
                if (filePathCallback != null) {          // 上一次没回填就再次点：先清掉，否则回调卡死
                    filePathCallback.onReceiveValue(null);
                    filePathCallback = null;
                }
                filePathCallback = cb;
                try {
                    Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                    i.addCategory(Intent.CATEGORY_OPENABLE);
                    i.setType(pickMime(params));
                    startActivityForResult(Intent.createChooser(i, "选择文件"), REQ_FILE);
                    return true;
                } catch (Exception e) {
                    filePathCallback = null;             // 没有可用的选择器：如实返回失败
                    return false;
                }
            }
        });

        w.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                String host = u == null ? null : u.getHost();
                if (host != null && (host.equals(HOST) || host.endsWith(".workbuddy.host"))) {
                    return false;               // 站内：自己加载
                }
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignored) { }
                return true;                    // 站外：交给系统浏览器
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                pageReady = true;
                offline.setVisibility(View.GONE);
                web.setVisibility(View.VISIBLE);
                flush();
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                if (req != null && req.isForMainFrame()) {
                    showOffline();
                }
            }
        });
    }

    private void buildOffline() {
        offline = new LinearLayout(this);
        offline.setOrientation(LinearLayout.VERTICAL);
        offline.setGravity(Gravity.CENTER);
        offline.setBackgroundColor(BG);
        offline.setVisibility(View.GONE);

        TextView title = new TextView(this);
        title.setText("连不上服务器");
        title.setTextColor(0xFFE8EAF2);
        title.setTextSize(17f);
        title.setGravity(Gravity.CENTER);

        TextView sub = new TextView(this);
        sub.setText("检查一下网络，再点下面重试");
        sub.setTextColor(0xFF8A90A6);
        sub.setTextSize(12.5f);
        sub.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams subLp = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        subLp.topMargin = dp(8);

        Button retry = new Button(this);
        retry.setText("重试");
        retry.setAllCaps(false);
        retry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                offline.setVisibility(View.GONE);
                web.setVisibility(View.VISIBLE);
                pageReady = false;
                web.loadUrl(homeUrl());
            }
        });
        LinearLayout.LayoutParams retryLp = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        retryLp.topMargin = dp(20);

        offline.addView(title);
        offline.addView(sub, subLp);
        offline.addView(retry, retryLp);

        root.addView(offline, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
    }

    private int dp(float v) {
        return Math.round(v * getResources().getDisplayMetrics().density);
    }

    private void showOffline() {
        pageReady = false;
        if (web != null) web.setVisibility(View.GONE);
        offline.setVisibility(View.VISIBLE);
    }

    /**
     * 状态栏/导航栏区域给 WebView 留出内边距，避免页面内容被系统栏压住。
     * 背景色一致，视觉上仍是通栏的深色。
     */
    private void applyInsets() {
        root.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override
            public WindowInsets onApplyWindowInsets(View v, WindowInsets ins) {
                int top = 0;
                int bottom = 0;
                if (Build.VERSION.SDK_INT >= 30) {
                    android.graphics.Insets bars = ins.getInsets(WindowInsets.Type.systemBars());
                    top = bars.top;
                    bottom = bars.bottom;
                } else {
                    top = ins.getSystemWindowInsetTop();
                    bottom = ins.getSystemWindowInsetBottom();
                }
                if (web != null) web.setPadding(0, top, 0, bottom);
                if (offline != null) offline.setPadding(0, top, 0, bottom);
                return ins;
            }
        });
        root.requestApplyInsets();
    }

    private void askPermission() {
        if (Build.VERSION.SDK_INT >= 29) {
            if (checkSelfPermission(Manifest.permission.ACTIVITY_RECOGNITION)
                    != PackageManager.PERMISSION_GRANTED) {
                try {
                    requestPermissions(
                            new String[]{Manifest.permission.ACTIVITY_RECOGNITION}, REQ_ACTIVITY);
                } catch (Exception ignored) { }
            }
        }
    }

    @Override
    public void onRequestPermissionsResult(int code, String[] perms, int[] granted) {
        super.onRequestPermissionsResult(code, perms, granted);
        if (code == REQ_ACTIVITY && granted != null && granted.length > 0
                && granted[0] == PackageManager.PERMISSION_GRANTED) {
            readAndDeliver();
        }
    }

    /**
     * 只有「只收图片」的场景（换头像）才把选择器收窄到 image/*，其余一律放开：
     * 安卓上 .json / .txt 经常被识别成 application/octet-stream，真按网页的 accept
     * 去过滤，用户反而在文件列表里找不到自己刚导出的备份。
     */
    private String pickMime(WebChromeClient.FileChooserParams params) {
        String[] acc = params == null ? null : params.getAcceptTypes();
        if (acc == null || acc.length == 0) return "*/*";
        for (String a : acc) {
            if (a == null || a.isEmpty()) continue;
            if (!a.startsWith("image/")) return "*/*";
        }
        return "image/*";
    }

    /** 系统选择器的结果在这里回填给网页 —— 不回填，input 会一直停在「等待选择」。 */
    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req == REQ_FILE) {
            Uri[] picked = null;
            if (res == RESULT_OK && data != null) {
                if (data.getClipData() != null) {            // 多选
                    int n = data.getClipData().getItemCount();
                    picked = new Uri[n];
                    for (int i = 0; i < n; i++) {
                        picked[i] = data.getClipData().getItemAt(i).getUri();
                    }
                } else if (data.getData() != null) {         // 单选（我们的场景）
                    picked = new Uri[]{ data.getData() };
                }
            }
            if (filePathCallback != null) {
                filePathCallback.onReceiveValue(picked);     // 取消时 picked 为 null，同样要回填
                filePathCallback = null;
            }
            return;
        }
        super.onActivityResult(req, res, data);
    }

    @Override
    protected void onResume() {
        super.onResume();
        // 每次回到前台都读一次：只要每天开过一次 App，当天的步数就是准的
        readAndDeliver();
    }

    private void readAndDeliver() {
        StepReader.readOnce(this, new StepReader.Cb() {
            @Override
            public void onSteps(int today, String date, boolean fresh) {
                final int t = today;
                final String d = date;
                final boolean f = fresh;
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        deliver(t, d, f);
                    }
                });
            }
        });
    }

    private void deliver(int today, String date, boolean fresh) {
        if (today < 0) return;              // 没有传感器或读不到
        pendingSteps = today;
        pendingDate = date == null ? "" : date;
        pendingFresh = fresh;
        flush();
    }

    private void flush() {
        if (!pageReady || pendingSteps < 0 || web == null) return;
        String js = "window.lbNativeSteps&&window.lbNativeSteps(" + pendingSteps
                + ",'" + pendingDate + "'," + (pendingFresh ? "true" : "false") + ")";
        evalJs(js);
        pendingSteps = -1;
        pendingFresh = false;
    }

    /**
     * 名字不能叫 run —— 在匿名 Runnable 内部调用会被解析成 Runnable.run()，
     * 编译期直接报"方法 run 不能应用于给定类型"。
     */
    private void evalJs(String js) {
        try {
            if (web != null) web.evaluateJavascript(js, null);
        } catch (Exception ignored) { }
    }

    /**
     * 页面 → 原生，只暴露一个动作：把计步基准对齐到用户填的「今日真实步数」。
     *
     * 为什么要校准：计步传感器只报「开机以来累计」，装机当天 App 不知道今天零点在哪，
     * 只能从当时开始算；用户把健康 App 上的数字告一次，基准就对齐了，之后每天自动准。
     *
     * calibrate 是从 JS 线程调进来的，而注册传感器需要带 Looper 的线程 ⇒ 转回主线程。
     */
    /** 壳的版本号（取自 manifest 的 versionName），同时写进 UA 和 JS 桥。 */
    static String verName(Activity a) {
        try {
            return a.getPackageManager().getPackageInfo(a.getPackageName(), 0).versionName;
        } catch (Exception e) {
            return "?";
        }
    }

    private class Bridge {
        /**
         * 让页面能读到壳的版本号。
         *
         * 为什么必须暴露：页面本身在云端，改了立刻生效；但**原生能力（文件选择）改了必须重装**。
         * 用户反馈"还是没反应"时，光看现象分不清是"没重装"还是"代码又坏了" —— 有了版本号，
         * 页面直接显示「应用版本 1.4 / 旧版应用」，一眼定位，不用来回猜。
         */
        @JavascriptInterface
        public String ver() { return verName(MainActivity.this); }

        @JavascriptInterface
        public void calibrate(final int todaySteps) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    StepReader.calibrate(MainActivity.this, todaySteps, new StepReader.Cb() {
                        @Override
                        public void onSteps(int today, String date, boolean fresh) {
                            if (today < 0) {
                                evalJs("window.lbCalibResult&&window.lbCalibResult(-1,'')");
                                return;
                            }
                            evalJs("window.lbCalibResult&&window.lbCalibResult(" + today
                                    + ",'" + date + "')");
                        }
                    });
                }
            });
        }
    }

    @Override
    public boolean onKeyDown(int code, KeyEvent ev) {
        if (code == KeyEvent.KEYCODE_BACK && web != null && web.canGoBack()) {
            web.goBack();
            return true;
        }
        return super.onKeyDown(code, ev);
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            root.removeView(web);
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }
}

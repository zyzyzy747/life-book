package com.lifebook.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;

/**
 * 每天 23:58 被闹钟唤醒读一次步数。
 *
 * 这里不需要联网、也不启动界面 —— 目的只是把「今天最后一次累计值」刷新下来，
 * 这样明天读到的步数就能以它作为零点的近似基准。
 * 真正写库发生在用户下次打开 App 的时候（走页面已有的同步逻辑）。
 *
 * ⚠ 国产 ROM（ColorOS / MIUI 等）默认会限制后台唤醒，需要用户把本应用加入
 *   「自启动 / 后台运行」白名单，否则这一步静默失效 —— 失效也不会出错，
 *   只是基准会退化成「上次打开 App 时的值」。
 */
public class AlarmReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context ctx, Intent intent) {
        if (!StepReader.ACTION_TICK.equals(intent.getAction())) return;

        final PendingResult pending = goAsync();
        final boolean[] finished = new boolean[]{false};

        final Runnable finish = new Runnable() {
            @Override
            public void run() {
                if (finished[0]) return;
                finished[0] = true;
                try {
                    pending.finish();
                } catch (Exception ignored) { }
            }
        };

        StepReader.readOnce(ctx, new StepReader.Cb() {
            @Override
            public void onSteps(int today, String date, boolean fresh) {
                // 值已经写进 SharedPreferences，这里无事可做
                new Handler(Looper.getMainLooper()).post(finish);
            }
        });

        // 兜底：传感器一直没回报时也要把接收器释放掉
        new Handler(Looper.getMainLooper()).postDelayed(finish, 8000);
    }
}

package com.lifebook.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/**
 * 手机重启后 AlarmManager 里注册的闹钟会被系统清空，
 * 所以在开机（以及应用被覆盖安装）时重新排一次。
 */
public class BootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context ctx, Intent intent) {
        String action = intent == null ? null : intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(action)
                || Intent.ACTION_MY_PACKAGE_REPLACED.equals(action)) {
            StepReader.ensureScheduled(ctx);
        }
    }
}

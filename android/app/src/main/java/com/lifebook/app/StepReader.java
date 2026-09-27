package com.lifebook.app;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.os.SystemClock;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/**
 * 直接读手机硬件的计步传感器，算出「今天走了多少步」。
 *
 * ⚠ 安卓给第三方 App 的唯一计步接口是 TYPE_STEP_COUNTER，它返回的是
 *   「开机以来累计步数」—— 它只知道开机那一刻从 0 开始数，**不知道"今天"是哪一段**。
 *   系统里那个"今日步数"（健康 App 显示的）来自厂商自己的健康服务，
 *   普通 App 没有权限读（需要厂商签名级权限），所以只能自己减出一个基准。
 *
 * 于是「今日步数」= 当前累计值 - 基准值。基准值怎么取，决定了准不准：
 *
 *  1) 同一天内继续读      → 沿用当天已存的基准（传感器只涨不跌，安全）
 *  2) 昨天读过（跨一天）  → 拿「昨天最后一次读到的累计值」近似今天的零点
 *  3) 首次运行 / 断档多天 → 这是最关键的一步：
 *       · 如果手机是**今天零点以后才开机的**，那累计值本来就全是今天的 ⇒ 基准 = 0，
 *         一装就能显示今天真实步数（用户重启过手机也算）
 *       · 否则拿不到今天的起点，只能以当前累计值为基准「从现在起算」，
 *         并把 fresh 标志交给页面，引导用户做一次校准（见 calibrate）
 *
 *  4) 校准：用户把手机健康 App 上的今日真实步数告诉页面，我们把基准对齐
 *     （基准 = 当前累计值 - 今日真实步数），之后每天自动准确，不用再管。
 *
 * 另外每天 23:58 会定时读一次（AlarmReceiver），把基准刷新到最贴近零点，
 * 这样即便用户不校准，第二天开始也是准的。
 */
public final class StepReader {

    public interface Cb {
        /**
         * today &lt; 0 表示这台设备读不到步数（没有计步传感器）。
         * fresh = true 表示「今天的起点没拿到，是从当前时刻起算的」——
         * 页面据此提示用户做一次校准。
         */
        void onSteps(int today, String date, boolean fresh);
    }

    static final String ACTION_TICK = "com.lifebook.app.STEP_TICK";

    private static final String PREF = "lb_steps";
    private static final long DAY_MS = 86400000L;

    /** 单日步数上限，防止数据异常时往库里写天文数字。 */
    private static final long MAX_STEPS = 200000L;

    /**
     * 开机时刻的判断容差。手机昨晚 23:40 开机、今天 0 点后继续用，
     * 严格比会算成"昨天开机"而丢掉今天；给半小时宽容度更实用
     * （代价只是把那 20 分钟内的步数多算一点，通常几十步）。
     */
    private static final long BOOT_GRACE_MS = 30 * 60 * 1000L;

    private StepReader() { }

    static SharedPreferences prefs(Context c) {
        return c.getApplicationContext().getSharedPreferences(PREF, Context.MODE_PRIVATE);
    }

    static String today() {
        return new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date());
    }

    /** 今天 00:00 的时刻（本地时区）。 */
    static long dayStart() {
        Calendar c = Calendar.getInstance();
        c.set(Calendar.HOUR_OF_DAY, 0);
        c.set(Calendar.MINUTE, 0);
        c.set(Calendar.SECOND, 0);
        c.set(Calendar.MILLISECOND, 0);
        return c.getTimeInMillis();
    }

    /**
     * 本次开机的时刻 = 当前时间 - 开机已运行时长。
     * elapsedRealtime 会把深睡也算进去，所以这个估算对「今天有没有开过机」足够用。
     */
    static Long bootAt() {
        try {
            return System.currentTimeMillis() - SystemClock.elapsedRealtime();
        } catch (Exception e) {
            return null;
        }
    }

    /** 手机是不是今天零点之后（近似）才开机的 —— 是的话累计值就等于今天的步数。 */
    private static boolean bootedToday() {
        Long boot = bootAt();
        if (boot == null) return false;
        return boot.longValue() >= dayStart() - BOOT_GRACE_MS;
    }

    /**
     * 读一次当前步数。注册监听后传感器会立刻回报一次当前累计值，
     * 不需要用户真的走动，所以这里拿到值就立刻注销。
     */
    static void readOnce(final Context ctx, final Cb cb) {
        withSensor(ctx, cb, new Value() {
            @Override
            public void onValue(Context app, long total, Cb cb2) {
                String d = today();
                SharedPreferences p = prefs(app);
                boolean hasBase = p.contains("base");
                String lastDate = p.getString("date", "");
                long lastTotal = p.getLong("lastTotal", total);

                long base;
                boolean fresh = false;
                if (d.equals(lastDate) && hasBase) {
                    base = p.getLong("base", total);            // 同一天：沿用当天基准
                } else if (isDayBefore(lastDate, d) && hasBase) {
                    base = lastTotal;                           // 跨一天：用昨晚最后一次的值当零点
                } else if (bootedToday()) {
                    base = 0;                                   // 今天才开机 ⇒ 累计值全是今天的
                } else {
                    base = total;                               // 拿不到今天起点 ⇒ 从现在起算
                    fresh = true;
                }

                save(app, d, total, base);
                done(cb2, (int) clamp(total - base), d, fresh);
            }
        });
    }

    /**
     * 把基准对齐到用户给的「今日真实步数」。
     * 这是唯一能拿到今天完整步数的办法（安卓不给第三方读系统健康数据的接口）。
     */
    static void calibrate(final Context ctx, final int todaySteps, final Cb cb) {
        withSensor(ctx, cb, new Value() {
            @Override
            public void onValue(Context app, long total, Cb cb2) {
                String d = today();
                long t = clamp(todaySteps);
                long base = Math.max(0, total - t);
                save(app, d, total, base);
                prefs(app).edit().putBoolean("calibrated", true).apply();
                done(cb2, (int) t, d, false);
            }
        });
    }

    /** 取一次传感器累计值（取不到时回调 -1），拿到就注销。 */
    private interface Value {
        void onValue(Context app, long total, Cb cb);
    }

    private static void withSensor(final Context ctx, final Cb cb, final Value out) {
        final Context app = ctx.getApplicationContext();
        final SensorManager sm = (SensorManager) app.getSystemService(Context.SENSOR_SERVICE);
        if (sm == null) {
            done(cb, -1, today(), false);
            return;
        }
        final Sensor sensor = sm.getDefaultSensor(Sensor.TYPE_STEP_COUNTER);
        if (sensor == null) {
            done(cb, -1, today(), false);
            return;
        }

        final SensorEventListener[] ref = new SensorEventListener[1];
        ref[0] = new SensorEventListener() {
            @Override
            public void onSensorChanged(SensorEvent ev) {
                try {
                    sm.unregisterListener(ref[0]);
                } catch (Exception ignored) { }
                if (ev.values == null || ev.values.length == 0) {
                    done(cb, -1, today(), false);
                    return;
                }
                try {
                    out.onValue(app, (long) ev.values[0], cb);
                } catch (Exception e) {
                    done(cb, -1, today(), false);
                }
            }

            @Override
            public void onAccuracyChanged(Sensor s, int accuracy) { }
        };

        try {
            sm.registerListener(ref[0], sensor, SensorManager.SENSOR_DELAY_NORMAL);
        } catch (Exception e) {
            done(cb, -1, today(), false);
        }
    }

    private static void save(Context app, String date, long total, long base) {
        long t = clamp(total - base);
        prefs(app).edit()
                .putString("date", date)
                .putLong("base", base)
                .putLong("lastTotal", total)
                .putLong("today", t)
                .putLong("readAt", System.currentTimeMillis())
                .apply();
    }

    private static long clamp(long v) {
        if (v < 0) return 0;
        if (v > MAX_STEPS) return MAX_STEPS;
        return v;
    }

    private static void done(Cb cb, int steps, String date, boolean fresh) {
        if (cb != null) {
            try {
                cb.onSteps(steps, date, fresh);
            } catch (Exception ignored) { }
        }
    }

    private static boolean isDayBefore(String last, String now) {
        if (last == null || last.length() != 10) return false;
        try {
            SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
            Date a = f.parse(last);
            Date b = f.parse(now);
            if (a == null || b == null) return false;
            long diff = b.getTime() - a.getTime();
            return diff == DAY_MS;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 每天 23:58 读一次，把基准和累计值刷新到当天最后一刻。
     * 下次跨天时就能用「昨晚的累计值」近似今天的零点基准 —— 这样只要闹钟能触发，
     * 用户即使不校准，第二天起也是准的。
     * 用 setInexactRepeating 避免申请精确闹钟权限（那个在新系统上会被限制）。
     */
    static void ensureScheduled(Context ctx) {
        try {
            Context app = ctx.getApplicationContext();
            AlarmManager am = (AlarmManager) app.getSystemService(Context.ALARM_SERVICE);
            if (am == null) return;

            Intent i = new Intent(app, AlarmReceiver.class).setAction(ACTION_TICK);
            int flags = PendingIntent.FLAG_UPDATE_CURRENT;
            if (Build.VERSION.SDK_INT >= 23) {
                flags |= PendingIntent.FLAG_IMMUTABLE;
            }
            PendingIntent pi = PendingIntent.getBroadcast(app, 7, i, flags);

            Calendar c = Calendar.getInstance();
            c.set(Calendar.HOUR_OF_DAY, 23);
            c.set(Calendar.MINUTE, 58);
            c.set(Calendar.SECOND, 0);
            c.set(Calendar.MILLISECOND, 0);
            if (c.getTimeInMillis() <= System.currentTimeMillis()) {
                c.add(Calendar.DAY_OF_YEAR, 1);
            }
            am.setInexactRepeating(
                    AlarmManager.RTC_WAKEUP, c.getTimeInMillis(), AlarmManager.INTERVAL_DAY, pi);
        } catch (Exception ignored) { }
    }
}

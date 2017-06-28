package com.larkapp;

import android.content.Context;
import android.provider.Settings;
import android.telephony.TelephonyManager;

/**
 * Created by blueberry on 6/23/2017.
 */

public final class DeviceUtils {
    private DeviceUtils() {
        throw new IllegalAccessError("Oops!,you should not instantiate this.");
    }

    public static String getDeviceId(Context context) {
        return Settings.Secure.getString(context.getContentResolver(),Settings.Secure.ANDROID_ID);
    }
}

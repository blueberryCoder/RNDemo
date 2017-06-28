package com.larkapp;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by blueberry on 6/23/2017.
 */

public class DeviceUtilInterface extends ReactContextBaseJavaModule {
    ReactApplicationContext mContext;

    public DeviceUtilInterface(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return "DeviceUtilInterface";
    }

    @ReactMethod
    public void getDeviceId(Promise promise) {
        try {
            promise.resolve(DeviceUtils.getDeviceId(mContext));
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}

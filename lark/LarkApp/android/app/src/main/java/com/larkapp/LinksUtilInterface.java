package com.larkapp;

import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by blueberry on 6/26/2017.
 */

public class LinksUtilInterface extends ReactContextBaseJavaModule {
    private static final String NAME = "LinksUtilInterface";

    private ReactApplicationContext mReactApplicationContext;

    public LinksUtilInterface(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactApplicationContext = reactContext;
    }

    @Override
    public String getName() {
        return NAME;
    }

    @Deprecated
    @ReactMethod
    public void callPhoneNumber(String url) {
        Intent intent = new Intent(Intent.ACTION_CALL);
        intent.setData(Uri.parse(url));
        mReactApplicationContext.startActivity(intent);
    }

    @ReactMethod
    public void sendEmail(String url, Promise promise) {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setData(Uri.parse(url));
        try {
            ComponentName componentName =
                    intent.resolveActivity(mReactApplicationContext.getPackageManager());
            if (componentName != null) {
                mReactApplicationContext.startActivity(intent);
                promise.resolve(true);
            }
            promise.reject("-1", "该设备不支持发送emai");
        } catch (Throwable e) {
            promise.reject(e);
        }
    }
}

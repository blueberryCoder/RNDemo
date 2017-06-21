package com.hybridusage;

import com.bumptech.glide.Glide;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.github.chrisbanes.photoview.OnScaleChangedListener;
import com.github.chrisbanes.photoview.PhotoView;

/**
 * Created by blueberry on 6/20/2017.
 */

public class PhotoViewManger extends SimpleViewManager<PhotoView> {

    private static final String TAG = "PhotoViewManger";

    private static final String REACT_CLASS = "PhotoView";

    private ThemedReactContext aContext;
    private PhotoView photoView;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected PhotoView createViewInstance(ThemedReactContext reactContext) {
        this.aContext = reactContext;
        photoView = new PhotoView(reactContext);
        photoView.setImageResource(R.mipmap.ic_launcher);
        photoView.setOnScaleChangeListener(new OnScaleChangedListener() {
            @Override
            public void onScaleChange(float scaleFactor, float focusX, float focusY) {
                // 这里又2中方案 ：  1.

                aContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ReactScaleChangeEvent(photoView.getId(),
                                "ScaleInfo: scaleFactor:" + scaleFactor
                                        + ",focusX" + focusX + ",focusY" + focusY));


//                // 2.
//                WritableMap map = Arguments.createMap();
//                map.putInt("target", photoView.getId());
//                map.putString("msg", "ScaleInfo: scaleFactor:" + scaleFactor
//                        + ",focusX" + focusX + ",focusY" + focusY);
//
//                /**
//                 * {@link com.facebook.react.uimanager.UIManagerModuleConstants}
//                 */
//                aContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                        photoView.getId(), "topChange", map
//                );

            }
        });

        return photoView;
    }

    @ReactProp(name = "imgSource")
    public void setSource(PhotoView photoView, String source) {
        Glide.with(aContext).load(source).into(photoView);
    }
}

/**
 * {@link com.facebook.react.uimanager.UIManagerModuleConstants}
 */
class ReactScaleChangeEvent extends Event<ReactScaleChangeEvent> {
    public static final String EVENT_NAME = "topChange"; //会被映射为onChange 具体映射关系参见 UIManagerModuleConstants.java

    private String msg;

    ReactScaleChangeEvent(int viewId, String msg) {
        super(viewId);
        this.msg = msg;
    }

    @Override
    public String getEventName() {
        return EVENT_NAME;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
    }

    private WritableMap serializeEventData() {
        WritableMap map = Arguments.createMap();
        map.putInt("target", getViewTag());
        map.putString("msg", this.msg);
        return map;
    }
}

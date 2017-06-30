/**
 * Created by blueberry on 6/29/2017.
 *
 * @flow
 *
 */
import React, {Component} from 'react';

import {Dimensions, PixelRatio} from 'react-native';


let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();

export default {
    size: {
        width: totalWidth,
        height: totalHeight,
        pixel: 1 / pixelRatio,
    },

    // post
    post(url: string, body: any, callback: (data: any) => void){
        let options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };

        fetch(url, options)
            .then(response => response.json())
            .then(json => callback(json));
    },

    //get
    get(url: string, callback: (data: any) => void){
        fetch(url)
            .then(response => response.json())
            .then(json => callback(json));
    },

    // http://lbs.amap.com/api/webservice/guide/api/search/

    // 搜索周边
    searchURL: 'http://restapi.amap.com/v3/place/around',

    // ID查询 B000AA9J4R
    detailURL: 'http://restapi.amap.com/v3/place/detail',

    // 高德地图的key
    KEY: '22ca3b2470389fd5e1dd477a9a2b47bf',
}
/**
 * Created by blueberry on 7/3/2017.
 * @flow
 *
 */

import React, {Component} from 'react';

import {View, StyleSheet, Dimensions, PixelRatio} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

let ratio = PixelRatio.get();

export default {
    size: {
        width: totalWidth,
        height: totalHeight,
    },

    pixel: 1 / ratio,
}
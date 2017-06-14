/**
 * Created by blueberry on 6/6/2017.
 */
'user strict'
import React from 'react';
import {StyleSheet, Dimensions, PixelRatio} from 'react-native'

let CommonStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: '#f6f8f8',
        },

        firstRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 5,
        },
        searchBarTextInput: {
            borderColor: 'black',
            borderWidth: 1,
            fontSize: 14,
            flex: 1,
            margin: 1,
        },
    }
);

export  {CommonStyle}






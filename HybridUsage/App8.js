/**
 * Created by blueberry on 6/20/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, requireNativeComponent, TextInput, Button, Alert} from 'react-native';

import PhotoView from './PhotoView';

class Main extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <PhotoView
                    onChange={(obj) => {
                        Alert.alert('scale',obj.nativeEvent.msg);
                    }}
                    style={{flex: 1, width: '100%'}}
                    imgSource='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497959956050&di=d9ac82e7c9ba4fde2836510aeb2f2248&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160309%2F9-16030Z92137.jpg'
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
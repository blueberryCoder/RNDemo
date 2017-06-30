/**
 * Created by blueberry on 6/30/2017.
 * @flow
 */

import React, {Component} from 'react';

import {View, StyleSheet, ScrollView, Text, TouchableOpacity, StatusBar, WebView} from 'react-native';

import Util from './Util';

import {CommonColor} from './CommonStyle';
export default class Map extends Component {

    static navigationOptions = {
        title: '地图',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor,}
    }

    state = {
        name: '',
        type: '',
        tag: '',
        address: '',
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}/>
                <WebView
                    source={require('../res/html/Map.html')}
                />
            </View>
        );
    }

}


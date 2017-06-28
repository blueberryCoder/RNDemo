/**
 * Created by blueberry on 6/28/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {View, WebView, StyleSheet, StatusBar} from 'react-native';

import {CommonColor} from '../CommonStyle';
export default class WebViewPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params && navigation.state.params.title || '',
            headerStyle: {backgroundColor: CommonColor.primaryColor},
            headerTintColor: 'white',
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}/>

                <WebView
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    source={{uri: this.props.navigation.state.params.url || ''}}
                />
            </View>
        );
    }
}
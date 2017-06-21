/**
 * Created by blueberry on 6/20/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, AppState, View, Text} from 'react-native';

class Main extends Component {
    _handleAppStateChange(newState) {
        console.log('Appstate is :' + newState);
    }

    componentWillMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    render() {
        return (
            <Text>测试App转台，按Home键，应为background</Text>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
/**
 * Created by blueberry on 6/20/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, WebView, Button, ProgressBarAndroid} from 'react-native';

class Main extends Component {
    _webView = null

    render() {
        return (<View style={styles.container}>
            <View style={styles.firstRow}>
                <Button title="上一步" onPress={() => this._webView.goBack()}/>
                <Button title="前进" onPress={() => this._webView.goForward()}/>
                <Button title="刷新" onPress={() => this._webView.reload()}/>
            </View>

            <WebView
                ref={webView => this._webView = webView}
                source={{uri: 'https://www.baidu.com'}}
                // source={require('./react-native.png')}
                style={{width: '100%', flex: 1, padding: 200}} //我这里使用Android模拟器，只有设置了padding，页面才会被加出来，api 0.45
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>);
    }
}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    firstRow: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
});


AppRegistry.registerComponent('HybridUsage', () => Main);
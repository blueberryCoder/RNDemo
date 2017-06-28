/**
 * Created by blueberry on 6/28/2017.
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {CommonColor, CommonStyle} from '../CommonStyle';
export default class AboutApp extends Component {
    static navigationOptions = {
        title: '关于',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _openWebView(title: string, url: string) {
        this.props.navigation.navigate('WebViewPage', {title: title, url: url});
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <Image
                    style={styles.logo}
                    source={require('../../res/images/logo.png')}/>

                <Text style={styles.row}>
                    Version:0.0.1
                </Text>

                <View style={styles.row}>
                    <Text style={styles.text}>项目地址</Text>
                    <TouchableOpacity
                        onPress={this._openWebView.bind(this, '项目地址', 'https://github.com/blueberryCoder/RNDemo')}
                    >
                        <Image
                            style={styles.image}
                            source={require('../../res/images/github.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <Text style={styles.text}>博客</Text>
                    <TouchableOpacity onPress={this._openWebView.bind(this, '博客', 'http://blog.csdn.net/a992036795')}>
                        <Image
                            style={[styles.image, {tintColor: '#c90915'}]}
                            source={require('../../res/images/csdn.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 80,
        marginTop: 20,
    },

    image: {
        width: 24,
        height: 24,
    },

    text: {
        width: '20%',
    },
    row: {
        width: '90%',
        borderWidth: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 6,
        alignItems: 'center',
        paddingLeft: 10,
    }


});
/**
 * Created by blueberry on 6/28/2017.
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Button, StatusBar, ToastAndroid, AsyncStorage} from 'react-native';

import {CommonColor} from '../CommonStyle';

import Util from '../util';

import Service from '../service';

export default class PublishMessage extends Component {

    static  navigationOptions = {
        title: '发布公告',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _message = null

    _publishMessage() {
        // publish message.
        if (!this._message) {
            ToastAndroid.show('请输入信息', ToastAndroid.SHORT);
            return;
        }

        AsyncStorage.getItem('token')
            .then(token => {
                Util.post(Service.host + Service.addMessage, {
                    token: token,
                    message: this._message,
                }, (data: any) => {
                    if (data.status) {
                        this.props.navigation.goBack();
                        ToastAndroid.show('添加信息成功', ToastAndroid.SHORT);
                    } else {
                        ToastAndroid.show('添加信息失败' + (data.data || ''), ToastAndroid.SHORT);
                    }
                });
            }).catch(e => ToastAndroid.show('请重新登录', ToastAndroid.SHORT));
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入公告内容'}
                    multiline={true}
                    textAlignVertical='top'
                    onChangeText={text => this._message = text}
                />
                <View style={styles.buttonContainer}>
                    <Button title="发布公告" onPress={this._publishMessage.bind(this)}/>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: Util.size.height * 0.25,
        borderWidth: 1,
        borderBottomColor: '#eeeeee',
        borderRadius: 4,
        marginTop: 10,
        padding: 4,
    },
    buttonContainer: {
        width: '90%',
        marginTop: 20,
        borderRadius: 4,
    }
});
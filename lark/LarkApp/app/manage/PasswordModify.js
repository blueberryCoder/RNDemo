/**
 * Created by blueberry on 6/27/2017.
 * @flow
 *
 */

import React, {Component}  from 'react';
import {View, StyleSheet, TextInput, Button, ToastAndroid, AsyncStorage, Keyboard} from 'react-native';
import {CommonColor} from '../CommonStyle';

import Util from '../util';

import Service from '../service';

import {NavigationActions} from 'react-navigation';
import EventBus from '../EventBus';

export default class ModifyPassword extends Component {
    static navigationOptions = {
        title: '修改密码',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
    }

    _oldPassword = '';
    _newPassword = '';

    _onPress = () => {

        Keyboard.dismiss();
        // 1 check
        if (!this._oldPassword || !this._newPassword) {
            ToastAndroid.show('输入不能为空', ToastAndroid.SHORT);
            return;
        }

        // 2.fetch
        AsyncStorage.getItem('token').then(token => {
            Util.post(Service.host + Service.updatePassword, {
                token: token,
                oldPassword: this._oldPassword,
                password: this._newPassword,
            }, (data: any) => {

                if (data.status) {
                    // succes
                    ToastAndroid.show('更新成功', ToastAndroid.SHORT);
                    this._clearTokenAndReturn();
                } else {
                    ToastAndroid.show('更新密码失败:', ToastAndroid.SHORT);
                }
            });
        }).catch(e => ToastAndroid.show('获取token失败', ToastAndroid.SHORT));

    }

    _clearTokenAndReturn() {
        AsyncStorage.clear()
            .then(() => {
                EventBus.INSTANCE.sendEvent({type: 'App'})
            }).catch(e => console.log(e));

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={[styles.textInputStyle, {marginTop: 20}]}
                           underlineColorAndroid={'transparent'}
                           placeholder={'原始密码'}
                           onChangeText={text => this._oldPassword = text}
                />
                <TextInput style={[styles.textInputStyle, {marginTop: 8}]}
                           underlineColorAndroid={'transparent'}
                           placeholder={'新密码'}
                           onChangeText={text => this._newPassword = text}
                />
                <View style={[styles.buttonContainer, {marginTop: 20}]}>
                    <Button title="修改密码" onPress={this._onPress}/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    textInputStyle: {
        borderColor: '#eeeeee',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 4,
    },

    buttonContainer: {
        width: '90%',
    }


});
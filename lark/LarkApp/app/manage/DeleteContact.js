/**
 * Created by blueberry on 6/28/2017.
 * @flow
 *
 */

import React, {Component} from 'react';

import {StyleSheet, View, StatusBar, TextInput, Button, ToastAndroid, AsyncStorage} from 'react-native';

import Util from '../util';
import Service from '../service';
import {CommonColor, CommonStyle} from '../CommonStyle';
export default class DeleteContact extends Component {
    static navigationOptions = {
        title: '删除联系人',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _email = null

    _delete() {
        if (!this._email) {
            ToastAndroid.show('请输入email~', ToastAndroid.SHORT);
            return;
        }
        AsyncStorage.getItem('token')
            .then(token => {
                Util.post(Service.host + Service.deleteUser, {
                    token: token,
                    email: this._email,
                }, (data: any) => {
                    if (data.status) {
                        ToastAndroid.show('删除成功', ToastAndroid.SHORT);
                        this.props.navigation.goBack();
                    } else {
                        ToastAndroid.show('删除失败' + (data.data || ''), ToastAndroid.SHORT);
                    }
                });
            })
            .catch(e => {
                ToastAndroid.show('请登录', ToastAndroid.SHORT);
            })

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
                    style={styles.text}
                    placeholder={'请输入用户的邮箱'}
                    onChangeText={text => this._email = text}
                    keyboardType={'email-address'}
                />

                <View
                    style={styles.buttonStyle}
                >
                    <Button title="删除用户" onPress={this._delete.bind(this)}/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },

    text: {
        width: Util.size.width * 0.9,
        marginTop: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#eeeeee',
        paddingTop: 4,
        paddingBottom: 4,
    },
    buttonStyle: {
        marginTop: 18,
        width: Util.size.width * 0.9,
    }

});
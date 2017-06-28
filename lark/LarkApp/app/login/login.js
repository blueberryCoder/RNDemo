/**
 * Created by blueberry on 6/23/2017.
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Button,
    StatusBar,
    ToastAndroid,
    NativeModules,
    Keyboard,
} from 'react-native';

import util from '../util';
import service from '../service';

export  default class Login extends Component {

    email = '';
    password = '';

    _login() {
        Keyboard.dismiss();

        // check
        if (!this.email || !this.password) {
            ToastAndroid.show('请填写信息', ToastAndroid.SHORT);
            return;
        }

        // login

        NativeModules.DeviceUtilInterface.getDeviceId()
            .then((text) => {
                util.post(service.host + service.login, {
                    email: this.email,
                    password: this.password,
                    deviceId: text,
                }, (data: any) => {
                    this.props.loginResult(data);
                })
            })
            .catch(e => ToastAndroid.show('获得设备id失败'));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}/>

                <Image
                    style={styles.image}
                    source={ require('../../res/images/logo.png')}/>

                <View style={styles.inputContainer}>
                    <Text>邮箱</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'请输入邮箱'}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => (this.email = text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>密码</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        placeholder={'请输入密码'}
                        onChangeText={(text) => (this.password = text)}
                    />
                </View>

                <View style={styles.button}>
                    <Button title="登录" onPress={this._login.bind(this)}/>
                </View>
            </View>
        );
    }
}

Login.propTypes = {
    loginResult: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    image: {
        width: 100,
        height: 80,
        marginTop: 90,
    },

    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
        padding: 1,
        flexDirection: 'row',
    },

    input: {
        borderColor: '#d6d6d6',
        borderRadius: 3,
        borderWidth: 1,
        flex: 1,
        padding: 2,
        marginLeft: 10,
    },
    button: {
        marginTop: 10,
        width: '26%',
    }

});
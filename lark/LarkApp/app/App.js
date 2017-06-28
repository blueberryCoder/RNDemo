/**
 * Created by blueberry on 6/23/2017.
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    ToastAndroid,
    AsyncStorage,
} from 'react-native';

import {TabNavigator, TabBarBottom} from 'react-navigation';

import util from './util';
import service from './service';

import Home  from './home/home';
import Message from './message/message';
import Manage from './manage/manage';
import About from './about/about';
import Login from './login/login';

import EventBus from './EventBus';

const TabNavigation = TabNavigator({
    Home: {
        screen: Home,
    },
    Message: {screen: Message},
    Manage: {screen: Manage},
    About: {screen: About},
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#3495fb'
    }
})

export default class Main extends Component {

    state = {
        login: false,
    }

    _shouldLogin = () => {
        this.setState({login: false});
    }

    subscriber = {
        type: 'App',
        fun: this._shouldLogin,
    }


    /**
     * 保存用户信息
     * @param data
     * @private
     */
    _saveUserInfo(data) {
        let userInfo = data.data;
        AsyncStorage.multiSet([
            ['username', userInfo.username],
            ['userid', userInfo.userid],
            ['partment', userInfo.partment],
            ['tel', userInfo.tel],
            ['tag', userInfo.tag],
            ['token', userInfo.token]
        ]).then(function () {

        }).catch(e => ToastAndroid.show('保存用户信息失败', ToastAndroid.show()));
    }

    componentWillMount() {
        EventBus.INSTANCE.register(this.subscriber);
        this._loginWithToken();
    }

    componentWillUnmount() {
        EventBus.INSTANCE.unRegister(this.subscriber);
    }

    /**
     * 使用token登录
     * @private
     */
    _loginWithToken() {
        AsyncStorage.getItem('token')
            .then((token) => {
                console.log('token:' + token);
                util.post(service.host + service.loginByToken, {token: token}, (data) => {
                    if (data.status) {
                        this.setState({login: true});
                    } else {
                        this.setState({login: false});
                    }
                })
            }).catch(e => {
            this.setState({login: false})
        });
    }


    render() {
        return (
            <View style={{flex: 1}}>
                {
                    this.state.login ? <TabNavigation/> : <Login
                        loginResult={(data) => {
                            if (data.status) {
                                ToastAndroid.show("登录成功", ToastAndroid.SHORT);
                                this._saveUserInfo(data);
                                this.setState({login: true});
                            } else {
                                ToastAndroid.show("登录失败", ToastAndroid.SHORT);
                            }
                        }}
                    />
                }

            </View>
        );
    }
}


AppRegistry.registerComponent('LarkApp', () => Main);
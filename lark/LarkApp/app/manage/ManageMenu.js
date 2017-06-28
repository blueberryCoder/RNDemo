/**
 * Created by blueberry on 6/27/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';

import {StyleSheet, View, TouchableOpacity, Text, Alert, AsyncStorage, ToastAndroid} from 'react-native';
import {CommonColor} from '../CommonStyle';
import Util from '../util';
import {NavigationActions} from 'react-navigation';
import EventBus from '../EventBus';
export  default class ManageMenu extends Component {

    static navigationOptions = {
        title: '管理',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
    }

    _array = [
        {letter: 'U', content: '修改密码', color: '#e44e41'},
        {letter: 'A', content: '增加联系人', color: '#4ebafb'},
        {letter: 'D', content: '删除联系人', color: '#fcd533'},
        {letter: 'M', content: '发布公告', color: '#df412c'},
    ];


    _onItemClick(index: number) {
        switch (index) {
            case 0:
                this.props.navigation.navigate('PasswordModify');
                break
            case 1:
                this.props.navigation.navigate('AddContact');
                break;
            case 2:
                this.props.navigation.navigate('DeleteContact');
                break;
            case 3:
                this.props.navigation.navigate('PublishMessage');
                break;
            case 4:
                this._loginOut();
                break
        }
    }

    _loginOut() {
        Alert.alert('退出登录?', '点击确认退出登录',
            [
                {
                    text: '确认', onPress: () => {
                    AsyncStorage.clear().then(() => {
                        ToastAndroid.show('退出成功', ToastAndroid.SHORT);

                        EventBus.INSTANCE.sendEvent({type: 'App'})

                    })
                        .catch(e => {
                            ToastAndroid.show('退出失败', ToastAndroid.SHORT);
                        });
                }
                },
                {
                    text: '取消', onPress: () => {
                }
                }
            ]);
    }

    render() {


        let items = this._array.map((data, index) => {
            return (
                <TouchableOpacity
                    key={data.letter}
                    onPress={() => {
                        this._onItemClick(index);
                    }}
                >
                    <View style={styles.itemContainer}>
                        <View style={styles.lineStyle}/>
                        <View style={styles.itemStyle}>
                            <Text style={[styles.letterStyle, {color: data.color}]}>
                                {data.letter}
                            </Text>
                            <Text style={styles.contentStyle}>
                                {data.content}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.spacingVertical}/>
                {
                    items
                }
                <View style={styles.lineStyle}/>
                <View style={styles.spacingVertical}/>

                <TouchableOpacity
                    onPress={() => this._onItemClick(4)}
                >
                    <View style={styles.itemContainer}>
                        <View style={styles.lineStyle}/>
                        <View style={styles.itemStyle}>
                            <Text style={[styles.letterStyle, {color: '#df412c'}]}>
                                Q
                            </Text>
                            <Text style={styles.contentStyle}>
                                退出登录
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineStyle}/>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    spacingVertical: {
        width: '100%',
        height: 40,
    },

    itemContainer: {
        backgroundColor: 'white'
    },

    lineStyle: {
        width: '100%',
        height: 1,
        backgroundColor: '#eeeeee',
    },

    itemStyle: {
        flexDirection: 'row',
        padding: 10,
    },
    letterStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    contentStyle: {
        fontSize: 16,
        marginLeft: 4,
    }

});
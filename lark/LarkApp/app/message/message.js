/**
 * Created by blueberry on 6/23/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';

import {StackNavigator} from 'react-navigation';

import MessageList from './MessageList';
import MessageDetail from './MessageDetail';

const MessageStackNavigator = StackNavigator(
    {
        MessageList: {screen: MessageList},
        MessageDetail: {screen: MessageDetail},
    }, {}
);

MessageStackNavigator.navigationOptions = {
    tabBarLabel: '公告',
    tabBarIcon: ({focused, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/message/gonggao.png')}/>)
}


export default MessageStackNavigator;
/**
 * Created by blueberry on 6/23/2017.
 *
 * @flow
 *
 */

import React from 'react';
import {Image} from 'react-native';
import {StackNavigator} from 'react-navigation';


import Group from './goup';
import ContactList from './ContactList';
const HomeStackNavigator = StackNavigator({
    Group: {screen: Group},
    ContactList: {screen: ContactList}
}, {});


HomeStackNavigator.navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({focused, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/home/phone.png')}/>)
}

export default HomeStackNavigator;
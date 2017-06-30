/**
 * Created by blueberry on 6/29/2017.
 * @flow
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Detail from '../../Detail';
import ToiletList from './ToiletList';
const BankStackNavigator = StackNavigator({
    BankList: {screen: ToiletList},
    Detail: {screen: Detail},
    Map: {screen: View},
}, {});

BankStackNavigator.navigationOptions = {
    title: '厕所',
    tabBarIcon: ({focus, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../../res/images/toilet.png')}
    />),
};
export default BankStackNavigator;
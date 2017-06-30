/**
 * Created by blueberry on 6/29/2017.
 * @flow
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import BankList from './BankList';
import Detail from '../../Detail';
import Map from '../../Map';

const BankStackNavigator = StackNavigator({
    BankList: {screen: BankList},
    Detail: {screen: Detail},
    Map: {screen: Map}
}, {});

BankStackNavigator.navigationOptions = {
    title: '银行',
    tabBarIcon: ({focus, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../../res/images/bank.png')}
    />),
}
;
export default BankStackNavigator;
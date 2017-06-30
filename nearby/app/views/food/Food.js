/**
 * Created by blueberry on 6/29/2017.
 * @flow
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Detail from '../../Detail';
import FoodList from './FoodList';
import Map from '../../Map';

const BankStackNavigator = StackNavigator({
    BankList: {screen: FoodList},
    Detail: {screen: Detail},
    Map: {screen: Map},
}, {});

BankStackNavigator.navigationOptions = {
    title: '美食',
    tabBarIcon: ({focus, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../../res/images/food.png')}
    />),
}
;
export default BankStackNavigator;
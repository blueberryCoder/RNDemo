/**
 * Created by blueberry on 6/23/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ManageMenu from './ManageMenu';
import PasswordModify from './PasswordModify';
import AddContact from './AddContact';
import DeleteContact from './DeleteContact';
import PublishMessage from './PublishMessage';

const ManageStackNavigator = StackNavigator({
    ManageMenu: {screen: ManageMenu},
    PasswordModify: {screen: PasswordModify},
    AddContact: {screen: AddContact},
    DeleteContact: {screen: DeleteContact},
    PublishMessage: {screen: PublishMessage},
}, {});


ManageStackNavigator.navigationOptions = {
    tabBarLabel: '管理',
    tabBarIcon: ({focused, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/manage/manager.png')}/>)
}
export default ManageStackNavigator;
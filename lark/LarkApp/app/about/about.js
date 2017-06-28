/**
 * Created by blueberry on 6/23/2017.
 *
 * @flow
 *
 */

import React from 'react';
import { Image} from 'react-native';
import AboutApp from './AboutApp';
import WebViewPage from './WebViewPage';
import {StackNavigator} from 'react-navigation';

const AboutStackNavigator = StackNavigator({
    AboutApp: {screen: AboutApp},
    WebViewPage: {screen: WebViewPage},
}, {});

AboutStackNavigator.navigationOptions = {
    tabBarLabel: '关于',
    tabBarIcon: ({focused, tintColor}) => (<Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/about/about.png')}/>)
}
export default AboutStackNavigator;
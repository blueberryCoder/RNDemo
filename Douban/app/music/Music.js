/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 *
 */

import React from 'react';
import {Image, View} from 'react-native'
import {StackNavigator} from 'react-navigation';
import MusicList from './MusicList';
import DouBanWebView from '../DouBanWebView';
const BookStackNavigator = StackNavigator({
    BookList: {screen: MusicList},
    DouBanWebView: {screen: DouBanWebView},

}, {});

BookStackNavigator.navigationOptions = {
    title: '音乐',
    tabBarIcon: ({focused, tintColor}) => <Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/music.png')}
    />
}

export default BookStackNavigator;

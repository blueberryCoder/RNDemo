/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 *
 */

import React from 'react';
import {Image, View} from 'react-native'
import {StackNavigator} from 'react-navigation';


import MovieList from './MovieList';
import DouBanWebView from '../DouBanWebView';
const BookStackNavigator = StackNavigator({
    BookList: {screen: MovieList},
    DouBanWebView: {screen: DouBanWebView},

}, {});

BookStackNavigator.navigationOptions = {
    title: '电影',
    tabBarIcon: ({focused, tintColor}) => <Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/movie.png')}
    />
}


export default BookStackNavigator;

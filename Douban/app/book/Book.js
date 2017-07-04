/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 *
 */

import React from 'react';
import {Image, View} from 'react-native'
import {StackNavigator} from 'react-navigation';
import BookList from './BooList';
import BookDetail from './BookDetail';
const BookStackNavigator = StackNavigator({
    BookList: {screen: BookList},
    BookDetail: {screen: BookDetail},
}, {});

BookStackNavigator.navigationOptions = {
    title: '图书',
    tabBarIcon: ({focused, tintColor}) => <Image
        style={{tintColor: tintColor}}
        source={require('../../res/images/book.png')}
    />
}

export default BookStackNavigator;

/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {View, AppRegistry, StyleSheet,AsyncStorage} from 'react-native';

import {TabNavigator, TabBarBottom} from 'react-navigation'

import Book from './book/Book';
import Movie from './movie/Movie';
import Music from './music/Music';

const DoubanTabNavigator = TabNavigator({
    Book: {screen: Book},
    Movie: {screen: Movie},
    Music: {screen: Music},
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
});


AppRegistry.registerComponent('Douban', () => DoubanTabNavigator);
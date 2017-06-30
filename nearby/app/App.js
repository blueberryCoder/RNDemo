/**
 * Created by blueberry on 6/29/2017.
 * @flow
 *
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import Bank from './views/bank/Bank';
import Film from './views/film/Film';
import Food from './views/food/Food';
import Toilet from './views/toilet/Toilet';

import LocationHolder from './views/LocationHolder';

const AppTabNavigator = TabNavigator({
    Bank: {screen: Bank},
    Film: {screen: Film},
    Food: {screen: Food},
    Toilet: {screen: Toilet},
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
});


export default class App extends Component {

    _watchId = null;

    componentWillMount() {
        this._watchId = navigator.geolocation.watchPosition(position => {
            LocationHolder.location = position.coords.longitude + ',' + position.coords.latitude
        });

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this._watchId)
    }


    render() {
        return (
            <AppTabNavigator/>
        );
    }
}

AppRegistry.registerComponent('nearby', () => App);
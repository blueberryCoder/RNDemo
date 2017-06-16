/**
 * Created by blueberry on 6/15/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, View, Button, Image, Text} from 'react-native';
import {NavigationActions, TabNavigator} from 'react-navigation';

class MainScreen extends Component {
    render() {
        return (
            <View>
                <Button title="跳转到Child页面" onPress={() => this.props.navigation.navigate('Child')}/>
                <Text>{this.props.navigation.state.params ? this.props.navigation.state.params.title : ''}</Text>
            </View>
        );
    }
}

class ChildScreen extends Component {


    render() {
        const navigationActions = NavigationActions.navigate({
            routeName: 'Home',
            params: {title: 'blueberryTitle'}

        });

        const resetActions = NavigationActions.reset(
            {
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Child2'}),
                    NavigationActions.navigate({routeName: 'Home', params: {title: 'Rest 测试'}}),
                ]
            }
        );

        const backAction = NavigationActions.back({
            // key: 'Home',
        });

        const setParamsAction = NavigationActions.setParams({
            params: { title: 'Hello' },
            key: 'Home',
        });

        return (
            <View>
                <Button title="返回" onPress={() => this.props.navigation.goBack()}/>
                <Button title="返回Home显示title" onPress={() => this.props.navigation.dispatch(navigationActions)}/>
                <Button title="测试Rest" onPress={() => this.props.navigation.dispatch(resetActions)}/>
                <Button title="返回到Child2" onPress={() => this.props.navigation.dispatch(backAction)}/>
                <Button title="改Home的参数" onPress={() => this.props.navigation.dispatch(setParamsAction)}/>
            </View>
        );
    }
}


class Child2Screen extends Component {


    render() {
        return (
            <View>
                <Text>I am Child 2 key's {this.props.navigation.state.key}</Text>
            </View>
        );
    }
}

const App = TabNavigator(
    {
        Home: {screen: MainScreen,},
        Child: {screen: ChildScreen},
        Child2: {screen: Child2Screen},
    },
    {
        order: ['Home', 'Child', 'Child2'],
    }
);

AppRegistry.registerComponent('NavigationUsage', () => App);


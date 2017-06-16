/**
 * Created by blueberry on 6/15/2017.
 */

import React, {Component} from 'react';
import {StyleSheet, AppRegistry, View, Button, Image,} from 'react-native';
import {TabNavigator, TabBarBottom, TabView, TabBarTop} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (<Image source={require('./img/chat_online_talk.png')}
                                             style={[styles.icon, {tintColor: tintColor}]}
        />),
    };

    render() {
        return (
            <Button title="Go to Notification" onPress={() => this.props.navigation.navigate('Notifications')}/>
        );
    }
}

class NotificationScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (<Image source={require('./img/notification.png')}
                                             style={[styles.icon, {tintColor: tintColor}]}
        />),
        // 也可以是其他React Element,
        // tabBarIcon: ({tintColor}) => (<Button title="按钮" onPress={() => {
        // }}/>),
    }
    ;

    render() {
        return (
            <Button title="Go back home" onPress={() => this.props.navigation.goBack()}/>
        );
    }
}

var styles = StyleSheet.create({
    icon: {width: 26, height: 26}
});

const App = TabNavigator(
    {
        Home: {screen: HomeScreen},
        Notifications: {screen: NotificationScreen}
    },

    {
        tabBarOptions: {
            //激活的tab tint颜色
            activeTintColor: '#e91e63',
            //没有激活的tab tint颜色
            inactiveTintColor: 'black',
            //大写转换
            upperCaseLabel: true,
            //显示icon
            showIcon: true,
        },
        // android默认是TabBarTop,ios默认是TabBarBottom,
        tabBarComponent: TabBarBottom,
        // 可以为 top，bottom，用来决定TabBar放置的位置
        tabBarPosition: 'bottom',
        //设置是否可以滑动
        swipeEnabled: true,
        //切换时是否欧动画效果
        animationEnabled: false,
        // 是否懒渲染tabs
        lazy: false,
        //第一个被加载的路由名称
        initialRouteName: 'Home',
        //路由名称数组
        order: ['Home', 'Notifications'],
        paths: {Home: 'home', Notifications: 'Notifications'},
        backBehavior: true,
    }
);




AppRegistry.registerComponent('NavigationUsage', () => App);
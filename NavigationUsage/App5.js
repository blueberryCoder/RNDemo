/**
 * Created by blueberry on 6/15/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Button, Image, ScrollView} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (<Image
            style={[styles.icon, {tintColor: tintColor}]}
            source={require('./img/chat_online_talk.png')}/>),

    }

    render() {
        return (
            <View>
                <Button title="Go to notifications" onPress={() => this.props.navigation.navigate('Notifications')}/>
                <Button title="打开抽屉" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                <Button title="关闭抽屉" onPress={() => this.props.navigation.navigate('DrawerClose')}/>
            </View>
        );
    }
}

class NotificationScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'notifications',
        drawerIcon: ({tintColor}) => (<Image
            style={[styles.icon, {tintColor: tintColor}]}
            source={require('./img/notification.png')}/>),
    }

    render() {
        return (
            <Button title="Go back home" onPress={() => this.props.navigation.goBack()}/>
        );
    }
}

const App = DrawerNavigator(
    {Home: {screen: HomeScreen}, Notifications: {screen: NotificationScreen}},

    //一下是DrawerNavigator 的配置
    {
        // 设置宽度
        drawerWidth: 300,
        // 设置从右边拉出，还是左边拉出
        drawerPosition: 'left',
        //默认的的值是 DrawerItems,我们也可以自己配置组件
        contentComponent: props => <ScrollView
            style={{borderWidth: 1, borderColor: 'red'}}><DrawerItems {...props}/></ScrollView>,
        contentOptions: {
            items: ['Home', 'Notification'],
            activeItemKey: 'key',
            activeTintColor: '#ff863f',
            activeBackgroundColor: '#d0caff',
            inactiveTintColor: '#000000',
            inactiveBackgroundColor: '#fffcf8',
            //这个设置了没起作用，android,api 0.45
            onItemPress: (route) => {
                console.log('TAG' + JSON.stringify(route))
            },
            style: {borderColor:'red',borderWidth:2,margin:1},
            labelStyle: {borderWidth:1,borderColor:'blue'},
        },

        // initialRouteName:'Notifications',
    }
    )
;

var styles = StyleSheet.create({
    icon: {width: 26, height: 26}
});
AppRegistry.registerComponent('NavigationUsage', () => App);

/**
 * Created by blueberry on 6/15/2017.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.props.screenProps  || ''}</Text>
                <Button title="Go to Profile"
                        onPress={() => this.props.navigation.navigate('Profile', {
                            title: 'blueberryTitle',
                            content: 'blueberryContent'
                        })}/>
            </View>
        );
    }
}

class Profile extends Component {
    static navigationOptions = ({navigation}) => ( {
        title: navigation.state.params.title,
    })

    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.content}</Text>
            </View>
        );
    }
}

const App = StackNavigator(
    /**
     * 路由配置
     */
    {
        Home: {screen: MainScreen},
        Profile: {screen: Profile, navigationOptions: {headerRight: null}},
    },

    /**
     * StackNavigator配置，也可以省略。
     */
    {
        // 配置初始化路由名称
        initialRouteName: 'Home',
        // 配置初始化路由的参数
        initialRouteParams: {content: '初始化传入的参数'},
        // 配置默认的 navigationOptions
        navigationOptions: {headerRight: <Text>右边Header</Text>},
        // 转场动画开始的回到
        onTransitionStart: () => {
            console.log('start')
        },
        headerMode: 'screen',
        cardStyle: {height: 500, backgroundColor: 'red'},
    }
);

const SomeStack = StackNavigator({
    // config
});

<SomeStack
    screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}
/>


AppRegistry.registerComponent('NavigationUsage', () => () => <App screenProps ={'测试'}/>);
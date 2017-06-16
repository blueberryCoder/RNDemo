/**
 * Created by Administrator on 5/27/2017.
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

class RecentChatsScreen extends React.Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${user}`,
            headerRight: (<Button title={isInfo ? 'Done' : `${user}'s Info`}
                                  onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
            />)
        };
    };


    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}


const MainScreenNavigator = TabNavigator({
    Recent: {
        screen: RecentChatsScreen
    },
    All: {
        screen: AllContactsScreen,
    },
});


// MainScreenNavigator.navigationOptions = {title: "Main"};

const SimpleApp = StackNavigator({
    // 使用 header:null 去掉StackNavigator的导航栏头部
    Home: {screen: MainScreenNavigator, navigationOptions: ({navigation}) => ({header: null}),},
    Chat: {
        screen: ChatScreen,
        //路径，user为可以接受的参数
        path: 'chat1/:user',

    }
},{})


const MainApp = () => <SimpleApp
    //设置 URL's  Schema,和 Host
    uriPrefix={'chat://chat/'}
    onNavigationStateChange={(preState, newState, action) => {
        console.log('preState:' + JSON.stringify(preState)
            + ',newState:' + JSON.stringify(newState) + ',action:' + JSON.stringify(action));
    }}/>
AppRegistry.registerComponent('NavigationUsage', () => MainApp);


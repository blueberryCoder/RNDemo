/**
 * Created by blueberry on 6/19/2017.
 *
 * 网络相关的API
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, Button, NetInfo} from 'react-native';

class Main extends Component {
    state = {
        content: '',
        net: ''
    }

    _removeListener = null;

    componentWillMount() {
        NetInfo.fetch().done((status) => this.setState({net: status}))

        this._removeListener = NetInfo.addEventListener('netChange', (status) => this.setState({net: status}));
    }

    componentWillUnmount() {

        this._removeListener();
    }

    render() {
        return (
            <View>
                <Text>{this.state.net}</Text>
                <Text>{this.state.content}</Text>
                <Button title="fetch" onPress={() => {
                    fetch('http://www.baidu.com', {method: 'GET', headers: {'User-Agent': 'React-Native'}})
                        .then(content => content._bodyInit)
                        .then(body => this.setState({content: 'fetch:\n' + body}))
                        .catch(error => this.setState({content: error}));

                }}/>
                <Button title="Ajax" onPress={() => {
                    let request = new XMLHttpRequest()
                    request.onreadystatechange = (e) => {
                        if (request.readyState !== 4) {
                            return;
                        }
                        if (request.status === 200) {
                            this.setState({content: 'ajax:\n' + request.responseText});
                        }
                    }

                    request.open('GET', 'http://www.baidu.com', true);
                    request.send();
                }}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
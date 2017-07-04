/**
 * Created by blueberry on 7/4/2017.
 *
 * @flow
 */

import React, {Component} from 'react';

import {AppRegistry, View, WebView} from 'react-native';

export default class DouBanWebView extends Component {
    static navigationOptions = ({navigation}) => {
        let title = navigation.state.params.title
        return {title: title}
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    style={{flex: 1,}}
                    source={{uri:this.props.navigation.state.params.alt}}
                />
            </View>
        );
    }

}
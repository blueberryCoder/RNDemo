/**
 * Created by blueberry on 6/30/2017.
 * @flow
 */

import React, {Component} from 'react';

import {View, StyleSheet, ScrollView, Text, TouchableOpacity, StatusBar} from 'react-native';

import Util from './Util';

import {CommonColor} from './CommonStyle';
export default class Detail extends Component {

    static navigationOptions = {
        title: '详情',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor,}
    }

    state = {
        name: '',
        type: '',
        tag: '',
        address: '',
    }

    componentWillMount() {
        Util.get(Util.detailURL + '?key=' + Util.KEY + '&id=' + this.props.navigation.state.params.id, (data: any) => {
            if (data.status && data.pois && data.pois.length != 0) {
                let item = data.pois[0];

                this.setState({
                    name: item.name,
                    type: item.type,
                    tag: item.tag,
                    address: item.address,
                });
            }
        });

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}/>
                <ScrollView
                    contentContainerStyle={styles.container}
                >
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text style={[styles.text, {marginTop: 10}]}>类型：{this.state.type}</Text>
                    <Text style={[styles.text, {marginTop: 10}]}>地址：{this.state.address}</Text>
                    <Text>标签：{this.state.tag}</Text>
                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 8,
    },
    name: {

        fontSize: 16,
    },

    text: {
        fontSize: 14
    }

});
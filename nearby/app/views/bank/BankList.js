/**
 * Created by blueberry on 6/29/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';
import {CommonColor} from '../../CommonStyle';
import List from '../List';
import LocationHolder from '../LocationHolder';
let subject = {
    fun: null,
}

export default class BankList extends Component {

    static navigationOptions = {
        title: '银行',
        headerRight: (<TouchableOpacity
            onPress={() => subject.fun()}
            style={{padding: 10}}>
            <Text style={{color: 'white'}}>地图</Text>
        </TouchableOpacity>),
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor,}
    }
    constructor() {
        super();
        subject.fun = () => {
            this.props.navigation.navigate('Map');
        }
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}
                />
                <List
                    style={{width: '100%', flex: 1}}
                    type="银行"
                    itemClick={id => {
                        this.props.navigation.navigate('Detail', {id: id})
                    }}
                />
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});
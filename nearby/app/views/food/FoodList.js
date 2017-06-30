/**
 * Created by blueberry on 6/29/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, StatusBar, Alert} from 'react-native';
import {CommonColor} from '../../CommonStyle';
import List from '../List';
export default class FoodList extends Component {
    static navigationOptions = {
        title: '美食',
        headerRight: (<TouchableOpacity
            onPress={() => {
                Alert.alert('地图');
            }}
            style={{padding: 10}}>
            <Text style={{color: 'white'}}>地图</Text>
        </TouchableOpacity>),
        headerTintColor: 'white',
        headerStyle: {backgroundColor: CommonColor.primaryColor,}
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
                    type="餐饮"
                    itemClick={id => {
                        // Alert.alert('itemClick', id || '');
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
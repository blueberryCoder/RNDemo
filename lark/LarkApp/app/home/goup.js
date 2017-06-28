/**
 * Created by blueberry on 6/23/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Alert, StatusBar} from 'react-native';
import {CommonStyle, CommonColor} from '../CommonStyle';
import {items} from './data';
import ItemBlock from './ItemBlock';


/**
 * 主页：分组
 */
export default class Group extends Component {
    static navigationOptions = {
        title: '主页',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item, index}) =>
        <ItemBlock title={item.title} partment={item.partment}
                   color={item.color}
                   index={index}
                   onItemPress={(index: number) => {
                       this.props.navigation.navigate('ContactList',{partment:items[index].partment});
                   }}
        />


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={CommonColor.primaryColor}/>
                <FlatList
                    style={{width: '100%', paddingLeft: 10, paddingTop: 10, paddingBottom: 10,}}
                    data={items}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={4}
                    ItemSeparatorComponent={() => <View style={{width: 10, height: 10}}/>}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
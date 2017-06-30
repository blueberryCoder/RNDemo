/**
 * Created by blueberry on 6/29/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TextInput, Text, RefreshControl} from 'react-native';
import ListItem from './ListItem';
import Util from '../Util';
import LocationHolder from './LocationHolder';

export default class List extends Component {

    state = {
        isRefresh: true,
    }

    _data = [];

    _keyworks = this.props.type

    _page = 0

    _offset = 20

    componentWillMount() {
        this._fetch();
    }

    _fetch() {
        let url = Util.searchURL
            + '?key=' + Util.KEY
            + '&location=' + LocationHolder.location
            + '&keywords=' + this._keyworks
            + '&page=' + this._page
            + '&offset=' + this._offset

        Util.get(url, (data: any) => {
            if (data.status) {
                this._data = this._data.concat(data.pois);
            }

            this.setState({isRefresh: false});
        });
    }

    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => (<ListItem
        data={{
            name: item.name,
            type: item.type,
            address: item.address,
            distance: item.distance + '米',
            tel: item.tel && item.tel.length ? item.tel.split(';')[0] : null,
            id: item.id,

        }}
        itemClick={this.props.itemClick}
    />);

    render() {
        console.log('data:' + JSON.stringify(this._data));
        return (
            <View style={styles.container}>
                <View
                    style={styles.textInputContainer}
                >
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'搜索' + this.props.type}
                        underlineColorAndroid={'transparent'}
                        onChangeText={text => this._keyworks = text}
                        multiline={false}
                        onSubmitEditing={() => {
                            this._page = 0;
                            this._data.length = 0;
                            this._fetch();
                        }}
                    />

                    <Text>
                        已为您筛选到
                        <Text style={styles.redText}>{this._data.length}</Text>
                        条数据
                    </Text>
                </View>

                <FlatList
                    style={{flex: 1, backgroundColor: 'white'}}
                    data={this._data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefresh}
                                        onRefresh={() => {
                                            this._page = 0;
                                            this._data.length = 0;
                                            this._fetch();
                                        }}
                                        title={'load...'}
                                        tintColor={'#ff0000'}
                                        colors={['#ff0000', '#00ff00', '#0000ff']}
                                        progressBackgroundColor={'#ffff00'}
                        />}
                    // showsVerticalScrollIndicator={false}
                    onEndReached={info => {
                        this._page++;
                        this._fetch();
                    }}

                    ItemSeparatorComponent={() => <View style={{height: 10, backgroundColor: '#dddddd'}}/>}
                />
            </View>
        );
    }
}

List.propTypes = {
    type: React.PropTypes.string.isRequired,
    itemClick: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        alignItems: 'center'
    },

    textInputStyle: {
        borderRadius: 4,
        width: '100%',
        borderWidth: 1,
        borderColor: '#c8c8c9',
    },

    textInputContainer: {
        width: '100%',
        padding: 10,
    },

    redText: {
        color: '#ee5d66',
    }

});
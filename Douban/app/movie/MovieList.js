/**
 * Created by blueberry on 7/3/2017.
 * @flow
 *
 */

import React, {Component} from 'react';

import {StyleSheet, View, FlatList, RefreshControl, ToastAndroid, Alert} from 'react-native';

import Util from '../Util';
import {URL, Http} from '../Services';

import EditInput from '../EditInput';
import MovieItem from "./MovieItem";
export default class MovieList extends Component {

    static navigationOptions = {
        title: '电影'
    }

    _keyword = '电影';

    _tempText = '';

    _start = 0;
    _count = 20;

    _hasMore = true;
    _data = []

    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => {

        let casts = '';
        for (let c of item.casts) {
            casts += (c.name || '') + ';';
        }
        let genres = '';
        for (let g of item.genres) {
            genres += g + ';';
        }

        return <MovieItem data={
            {
                title: item.title,
                casts: casts,
                average: item.rating.average + '',
                year: item.year,
                genres: genres,
                alt: item.alt,
                image: item.images.medium,
            }
        } itemClick={(title: string, alt: string) => {
            this.props.navigation.navigate('DouBanWebView', {title: title, alt: alt})
        }}/>
    }

    state = {
        isRefresh: true,
    }

    componentWillMount() {
        this._fetch();
    }


    _onRefresh = () => {
        this._hasMore = true;
        this._start = 0;
        this._data.length = 0;
        this._fetch();
    }

    _fetch() {
        if (!this._hasMore) {
            ToastAndroid.show('没有更多了', ToastAndroid.SHORT);
            return;
        }
        Http.get(URL.BASE_URL + URL.MOVIE_SEARCH + '?q='
            + this._keyword + '&start=' + this._start + '&count=' + this._count)
            .then((data: any) => {
                if (data.subjects && data.subjects.length != 0) {
                    this._data = this._data.concat(data.subjects);
                    this._start += data.subjects.length;
                    this.setState({isRefresh: false});
                } else {
                    // no more
                    this._hasMore = false;
                }
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <View style={styles.container}>
                <EditInput
                    placeholder={'请输入电影名称'}
                    onChangeText={text => this._tempText = text}
                    onSubmitEditing={() => {
                        this._keyword = this._tempText;
                        this._onRefresh();
                    }}
                />

                <FlatList
                    style={styles.list}
                    data={this._data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View
                        style={{height: 1, backgroundColor: '#eeeeee'}}
                    />}
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefresh}
                                        onRefresh={this._onRefresh}
                        />
                    }
                    onEndReached={
                        () => {
                            this._fetch();
                        }
                    }
                />
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },

    list: {
        width: '100%',
        flex: 1,
    }

});
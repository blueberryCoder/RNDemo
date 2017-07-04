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
import MusicItem from "./MusicItem";
export default class MusicList extends Component {

    static navigationOptions = {
        title: '音乐'
    }

    _keyword = '音乐';

    _tempText = '';

    _start = 0;
    _count = 20;

    _hasMore = true;
    _data = []

    state = {
        isRefresh: true,
    }

    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => {
        return <MusicItem data={
            {
                title: item.title,
                average: item.rating.average + '',
                pubdate: item.attrs.pubdate && item.attrs.pubdate.length != 0 ? item.attrs.pubdate[0] : '',
                alt: item.alt,
                image: item.image,
                singer: item.attrs.singer && item.attrs.singer.length!=0? item.attrs.singer[0] : '',
            }
        } itemClick={(title: string, alt: string) => {
            this.props.navigation.navigate('DouBanWebView', {title: title, alt: alt})
        }}/>
    }


    componentWillMount() {
        this._onRefresh();
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
        Http.get(URL.BASE_URL + URL.MUSIC_SEARCH + '?q='
            + this._keyword + '&start=' + this._start + '&count=' + this._count)
            .then((data: any) => {
                if (data.musics && data.musics.length != 0) {
                    this._data = this._data.concat(data.musics);
                    this._start += data.musics.length;
                    console.log(JSON.stringify(this._data));
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
                    placeholder={'请输入音乐名称'}
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
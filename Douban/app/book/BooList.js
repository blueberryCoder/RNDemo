/**
 * Created by blueberry on 7/3/2017.
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, StatusBar, RefreshControl, ToastAndroid} from 'react-native';
import {URL, Http}  from '../Services';
// import {} from '../CommonStyle';

import EditInput from '../EditInput';
import BookItem from './BookItem';
export default class BookList extends Component {

    static navigationOptions = {
        title: '图书'
    }

    state = {
        isRefresh: true
    }

    _books = []

    _keyword = '图书'

    _tempText = '';

    _start = 0

    _count = 20

    _hasMore = true

    componentWillMount() {
        this._fetch();
    }

    _onRefresh = () => {
        this._hasMore = true;
        this._start = 0;
        this._books.length = 0;
        this._fetch();
    }

    _fetch() {
        if (!this._hasMore) {
            ToastAndroid.show('没有更多了', ToastAndroid.SHORT);
            return;
        }

        Http.get(URL.BASE_URL + URL.BOOK_SEARCH + "?q="
            + this._keyword + '&start=' + this._start + '&count=' + this._count)
            .then((data) => {
                if (data.books && data.books.length != 0) {
                    this._books = this._books.concat(data.books);
                    this._start += data.books.length;
                    this.setState({isRefresh: false});
                } else {
                    this._hasMore = false;
                }
            })
            .catch(e => console.error(e));
    }


    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => {

        let author = '';
        for (let a of item.author) {
            author += a + ';'
        }

        return <BookItem
            data={{
                title: item.title,
                image: item.image,
                publisher: item.publisher,
                author: author,
                price: item.price,
                page: item.pages + '页',
                id: item.id,
            }}

            fun={(id, title) => {
                // 26694486
                // Alert.alert(id + '');
                this.props.navigation.navigate('BookDetail', {id: id, title: title});
            }
            }
        />
    }

    render() {
        return (
            <View style={styles.container}>
                <EditInput
                    placeholder={'请输入要查找的图书'}
                    onChangeText={text => this._tempText = text}
                    onSubmitEditing={() => {

                        this._keyword = this._tempText;
                        this._onRefresh();
                    }}
                />

                <FlatList
                    style={styles.list}
                    data={this._books}
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
/**
 * Created by blueberry on 6/26/2017.
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, TextInput, FlatList, RefreshControl, StatusBar} from 'react-native';
import {CommonColor, CommonStyle} from '../CommonStyle';
import Util from '../util';
import Service from '../service';
import MessageListItem from './MessageListItem';

export default class MessageList extends Component {

    static navigationOptions = {
        title: '公告',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    state = {
        messages: null,
        isRefresh: true,
    }

    _text = ''

    _allMessage = []

    _searchWithKeyWord = () => {
        let oldMessages = this._allMessage;

        let newMessage = oldMessages.filter((item, index) => {
            return item.message && new RegExp(this._text).test(item.message);
        });

        this.setState({
            messages: newMessage,
        })
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item, index}) => {
        return <MessageListItem
            data={item}
            onItemClick={data => this.props.navigation.navigate('MessageDetail', {data: data})}
        />
    };

    componentWillMount() {
        this._fetchMessage();
    }

    _fetchMessage() {
        Util.post(Service.host + Service.getMessage, {key: Util.key}, (data: any) => {
            if (data.status) {
                this._allMessage = data.data;
                this.setState({isRefresh: false, messages: this._allMessage});
            } else {
                this.setState({isRefresh: false});
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}
                />
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder={'搜索'}
                        multiline={false}
                        onChangeText={text => this._text = text}
                        placeholderTextColor={'#d9d9dd'}
                        onSubmitEditing={this._searchWithKeyWord}
                    />
                </View>

                <View style={{width: '100%', height: 1, backgroundColor: '#eeeeee'}}/>
                <FlatList
                    data={this.state.messages}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e5e5e5'}}/>}
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefresh}
                                        onRefresh={() => this._fetchMessage()}
                                        tintColor={CommonColor.primaryColor}
                                        colors={['#E20079', '#FFd602', '#25BFFE']}
                        />
                    }

                    showsVerticalScrollIndicator={false}

                />
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    searchContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchTextInput: {
        width: '90%',
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#f5f5f5'
    }
});
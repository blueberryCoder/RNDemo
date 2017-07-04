/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import BookItem from './BookItem';
import {URL, Http} from '../Services';
import Util from '../Util';

export default class BookDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title || '',
        }
    }

    state = {
        data: {},
        summary: '',
        author_intro: ''
    }

    componentWillMount() {
        //  fetch
        Http.get(URL.BASE_URL + URL.BOOK_INFO + this.props.navigation.state.params.id)
            .then((data: any) => {

                let author = '';
                for (let a of data.author) {
                    author += a + ';'
                }

                this.setState({
                    data: {
                        title: data.title,
                        image: data.image,
                        publisher: data.publisher,
                        author: author,
                        price: data.price,
                        page: data.pages + '页',
                        id: data.id,
                    },
                    summary: data.summary,
                    author_intro: data.author_intro,
                });

            })
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <BookItem
                        style={styles.item}
                        data={this.state.data} fun={() => {
                    }}/>

                    <View style={{height: 1, backgroundColor: '#eeeeee'}}/>

                    <Text style={styles.tagText}>图书简介</Text>

                    <Text>{this.state.summary}</Text>

                    <Text style={styles.tagText}>作者简介</Text>

                    <Text>{this.state.author_intro}</Text>
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },

    item: {
        width: '100%',
        height: Util.size.height * 0.3,
    },

    tagText: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black',
    }
});


/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
export default class BookItem extends Component {


    state = {
        disable: false,
    }

    _timer = null;

    async _toPress() {

        this.props.fun && this.props.fun(this.props.data.id, this.props.data.title);

        await this.setState({disable: true});

        this._timer = setTimeout(async () => {
            await this.setState({disable: false});
        }, 1500);
    }

    componentWillUnmount() {
        this._timer && clearTimeout(this._timer);
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.state.disable}
                onPress={this._toPress.bind(this)}>
                <View
                    style={styles.container}
                >
                    <Image
                        style={styles.image}
                        source={{uri: this.props.data.image}}
                    />

                    <View style={styles.content}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.publisher}>{this.props.data.publisher}</Text>
                        <Text style={styles.author}>{this.props.data.author}</Text>
                        <View style={styles.row}>
                            <Text style={styles.price}>{this.props.data.price}</Text>
                            <Text style={styles.page}>{this.props.data.page}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

BookItem.propTypes = {
    data: React.PropTypes.shape({
        image: React.PropTypes.string,
        title: React.PropTypes.string,
        publisher: React.PropTypes.string,
        author: React.PropTypes.string,
        price: React.PropTypes.string,
        page: React.PropTypes.string,
        id: React.PropTypes.string,
    }).isRequired,

    fun: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 4,
    },

    image: {
        width: 80,
        height: 100,
    },

    content: {
        justifyContent: 'space-between',
        marginLeft: 10,
    },

    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    publisher: {
        fontSize: 12,
    },
    author: {
        fontSize: 12,

    },

    row: {
        flexDirection: 'row'
    },
    price: {
        fontSize: 12,
        color: '#add2ff'
    },

    page: {
        marginLeft: 10,
        fontSize: 12,
    }


});

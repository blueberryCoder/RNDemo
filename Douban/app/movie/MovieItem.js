/**
 * Created by blueberry on 7/4/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class MovieItem extends Component {

    state = {
        disable: false,
    }

    _timer = null;

    async _toPress() {

        this.props.itemClick &&  this.props.itemClick(this.props.data.title, this.props.data.alt);

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
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.data.image}}
                />

                <View style={styles.content}>
                    <Text style={styles.text}
                          numberOfLines={1}
                    >名称:{this.props.data.title}</Text>

                    <Text
                        style={styles.text}
                        numberOfLines={1}
                    >演员:{this.props.data.casts}</Text>

                    <Text
                        style={styles.text}
                        numberOfLines={1}
                    >评分:{this.props.data.average}</Text>

                    <Text
                        style={styles.text}
                        numberOfLines={1}
                    >时间:{this.props.data.year}</Text>

                    <Text
                        style={styles.text}
                        numberOfLines={1}
                    >标签:{this.props.data.genres}</Text>

                    <TouchableOpacity
                        disabled={this.state.disable}
                        style={styles.button}
                        onPress={this._toPress.bind(this)}
                    >
                        <Text>详情</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}


MovieItem.propTypes = {
    data: React.PropTypes.shape({
        image: React.PropTypes.string,
        title: React.PropTypes.string,
        casts: React.PropTypes.string,
        average: React.PropTypes.string,
        year: React.PropTypes.string,
        genres: React.PropTypes.string,
        alt: React.PropTypes.string,
    }).isRequired,

    itemClick: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        padding: 4,
    },

    image: {
        width: 80,
        height: 100,
    },

    content: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 12,
    },

    button: {
        marginLeft: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        padding: 4,
    }

});
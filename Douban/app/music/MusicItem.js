/**
 * Created by blueberry on 7/4/2017.
 *
 * @flow
 */

import React, {Component} from 'react';

import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class MusicItem extends Component {

    state = {
        disable: false,
    }

    _timer = null;

    _toPress() {

        this.props.itemClick && this.props.itemClick(this.props.data.title, this.props.data.alt)

        this.setState({disable: true});

        this._timer = setTimeout(() => {
            this.setState({disable: false});
        }, 1500);
    }

    componentWillUnmount() {
        this._timer && clearTimeout(this._timer);
    }


    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={{uri: this.props.data.image}}
                />

                <View style={styles.content}>
                    <Text style={styles.text}>曲目:{this.props.data.title}</Text>
                    <Text style={styles.text}>演唱:{this.props.data.singer}</Text>

                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>时间:{this.props.data.pubdate}</Text>
                    <Text style={styles.text}>评分:{this.props.data.average}</Text>
                </View>

                <TouchableOpacity
                    disabled={this.state.disable}
                    style={styles.button}
                    onPress={this._toPress.bind(this)}
                >
                    <Text>详情</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

MusicItem.propTypes = {
    data: React.PropTypes.shape({
        image: React.PropTypes.string,
        title: React.PropTypes.string,
        singer: React.PropTypes.string,
        pubdate: React.PropTypes.string,
        average: React.PropTypes.string,
        alt: React.PropTypes.string,
    }).isRequired,

    itemClick: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 4,
        alignItems: 'center',
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 4,
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
    },

    button: {
        borderColor: '#eeeeee',
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,

        width: 100,

        justifyContent: 'center',
        alignItems: 'center'

    }

});
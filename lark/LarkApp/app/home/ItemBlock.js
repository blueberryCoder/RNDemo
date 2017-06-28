/**
 * Created by blueberry on 6/26/2017.
 * @flow
 *
 */

import  React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import util from '../util';
export  default class ItemBlock extends Component {

    render() {
        return ( <TouchableOpacity style={styles.container}
                                   onPress={() => this.props.onItemPress(this.props.index)}
        >
            <View style={[styles.view, {backgroundColor: this.props.color}]}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <Text style={styles.partmentText}>{this.props.partment}</Text>
            </View>
        </TouchableOpacity>);
    }
}

ItemBlock.propTypes = {
    title: React.PropTypes.string.isRequired,
    partment: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    onItemPress: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired,
}

var styles = StyleSheet.create({
    container: {
        width: (util.size.width - 50) / 4,
        height: (util.size.width - 50) / 4,
        marginRight: 10,
    },
    view: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    titleText: {
        color: 'white',
        fontSize: 20,
    },
    partmentText: {
        color: 'white',
        fontSize: 12,
    }
});
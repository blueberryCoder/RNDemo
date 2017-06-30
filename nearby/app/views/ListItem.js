/**
 * Created by blueberry on 6/29/2017.
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Util from '../Util';
export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.props.itemClick(this.props.data.id);
                }}>
                    <View style={styles.row}>
                        <Text style={styles.nameStyle}>{this.props.data.name}</Text>
                        <Text style={styles.distance}>{this.props.data.distance}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.type}
                              numberOfLines={1}
                        >
                            {this.props.data.type}
                        </Text>
                        <Text style={styles.address}
                              numberOfLines={1}
                        >
                            {this.props.data.address}
                        </Text>
                    </View>

                    {
                        this.props.data.tel && <TouchableOpacity
                            style={styles.telContainer}
                            onPress={() => Alert.alert('打电话', this.props.tel || '')}
                        >
                            <Text style={styles.tel}>
                                电话
                            </Text>
                        </TouchableOpacity>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}


ListItem.propTypes = {
    data: React.PropTypes.shape(
        {
            name: React.PropTypes.string,
            distance: React.PropTypes.string,
            type: React.PropTypes.string,
            address: React.PropTypes.string,
            tel: React.PropTypes.string,
            id: React.PropTypes.string,
        }
    ),

    itemClick: React.PropTypes.func.isRequired,

}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Util.size.width - 20,
    },

    nameStyle: {
        color: 'black',
        fontWeight: 'bold',
    },

    distance: {},

    type: {
        color: '#808080',
        flex: 1,
    },

    address: {
        color: '#808080',
        flex: 1,
    },

    telContainer: {
        width: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    tel: {
        color: 'black',
        // width: '100%',
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#e8e8e8'
    }


});
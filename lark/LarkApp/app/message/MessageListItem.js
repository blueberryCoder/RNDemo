/**
 * Created by blueberry on 6/27/2017.
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {CommonColor} from '../CommonStyle';

export default class MessageListItem extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.onItemClick(this.props.data);
            }}>
                <View style={styles.container}>
                    <View style={[styles.iconStyle, {backgroundColor: CommonColor.getRandomColor()}]}>
                        <Text style={styles.iconTextStyle}>
                            {
                                this.props.data.username.substr(0, 1) || '未'
                            }
                        </Text>
                    </View>

                    <View style={styles.contentStyle}>
                        <Text
                            style={styles.messageStyle}
                            numberOfLines={2}
                        >
                            {
                                this.props.data.message || ''
                            }
                        </Text>

                        <Text style={styles.timeStyle}>
                            {
                                this.props.data.time || ''
                            }
                        </Text>
                    </View>

                    <View style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>
                            {
                                this.props.data.username || '未'
                            }
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

MessageListItem.propTypes = {
    data: React.PropTypes.shape({
        username: React.PropTypes.string,
        time: React.PropTypes.string,
        message: React.PropTypes.message,
    }).isRequired,

    onItemClick: React.PropTypes.func,
}
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconStyle: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconTextStyle: {
        color: 'white',
        fontSize: 30,
    },

    contentStyle: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 60,
    },

    messageStyle: {
        fontSize: 16,
    },

    timeStyle: {
        fontSize: 12,
        color: '#e7e7e7'
    },

    nameContainer: {
        width: 50,
        alignItems: 'flex-end'
    },

    nameStyle: {
        fontSize: 14,
        color: '#d4d4d4',
        margin: 8,
    }


});
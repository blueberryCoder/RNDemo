/**
 * Created by blueberry on 6/26/2017.
 *
 * Message详情页面。
 *
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {CommonColor, CommonStyle} from '../CommonStyle';
import Util from '../util';

export default class MessageDetail extends Component {

    static navigationOptions = {
        title: '消息详情',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}
                />
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <Text
                        style={styles.message}
                    >{this.props.navigation.state.params.data.message || ''}</Text>

                    <View style={styles.otherInfoContainer}>
                        <View
                            style={styles.otherInfo}
                        >
                            <Text
                                style={styles.otherInfoText}
                            >
                                {this.props.navigation.state.params.data.username || ''}
                            </Text>

                            <Text
                                style={styles.otherInfoText}
                            >
                                {this.props.navigation.state.params.data.time || ''}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },

    scrollViewStyle: {},

    message: {
        fontSize: 14,
        width: '100%',
    },

    otherInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    otherInfo: {
        width: Util.size.width / 4,
        marginTop: 20,
    },

    otherInfoText: {
        color: CommonColor.primaryColor,
        fontSize: 12,
    }


});


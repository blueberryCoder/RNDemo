/**
 * Created by blueberry on 6/29/2017.
 * @flow
 */

import React, {Component} from 'react';

import {
    StyleSheet, View, Image, Text, TouchableOpacity, Alert,
    PermissionsAndroid, Linking, ToastAndroid
} from 'react-native';
import Util from '../Util';
export default class ListItem extends Component {

    _callPhone = async (phone: string) => {
        let url = 'tel://' + phone;
        const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
        if (granted) {
            //打电话
            this._realCallPhone(url);
        } else {
            const g = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE, {
                title: '申请打电话权限',
                message: '应用只有获取打电话权限，才可以打电话',
            });
            if (g === PermissionsAndroid.PERMISSIONS.GRANTED) {
                //打电话
                this._realCallPhone(url);
            } else {
                //用户没有屌你
            }

        }

    }

    _realCallPhone(url: string) {
        Linking.canOpenURL(url)
            .then(supported => supported ?
                Linking.openURL(url) : ToastAndroid.show('该设备不支持打电话', ToastAndroid.SHORT))
            .catch(e => ToastAndroid.show('打电话失败' + e, ToastAndroid.SHORT));
    }

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
                            onPress={() => {
                                this._callPhone(this.props.data.tel)
                            }}
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
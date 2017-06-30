/**
 * Created by blueberry on 6/26/2017.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    FlatList,
    RefreshControl,
    Modal,
    Linking,
    Alert,
    ToastAndroid,
    PermissionsAndroid,
    NativeModules,
} from 'react-native';

import {CommonStyle, CommonColor} from '../CommonStyle';

import Service from '../service';
import Util from '../util';

import ContactListItem from './ContactListItem';

export default class ContactList extends Component {
    static navigationOptions = {
        title: '主页',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _partment = '';

    state = {
        isRefresh: true,
        partment: [],
    }

    componentWillMount() {
        //partment
        this._partment = this.props.navigation.state.params.partment || '';
        this._fetchUsers();
    }

    _fetchUsers() {
        Util.post(Service.host + Service.getUser, {
                key: Util.key,
                partment: this._partment,
            },
            (data: any) => {
                if (data.status) {
                    this.setState({isRefresh: false, partment: data.data});
                } else {
                    this.setState({isRefresh: false});
                }
            }
        );
    }

    _keyExtractor = (item, index) => index;


    _renderItem = ({item, index}) =>
        <ContactListItem
            data={item}
            onEmailClick={this._onEmailClick}
            onPhoneClick={this._onPhoneClick}
        />


    _onEmailClick = (username: string, email: string) => {
        Alert.alert('给' + username + '发送email?', email,
            [
                {
                    text: '确定', onPress: () => {
                    this._realSendEmail('mailto://' + email);
                }
                }
            ]
        );
    }

    _onPhoneClick = (username: string, phone: string) => {
        Alert.alert('给' + username + '拨打电话', phone || '',
            [
                {
                    text: '确定', onPress: () => {
                    this._callPhone('tel://' + phone);
                }
                }
            ]
        );
    }

    async _callPhone(url: string) {
        const granted: boolean = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
        if (granted) {
            // 打电话
            this._realCallPhone(url);
        } else {
            const g: string = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE, {
                title: '申请打电话权限',
                message: '应用只有获得打电话权限才能打电话',
            })
            if (g == PermissionsAndroid.RESULTS.GRANTED) {
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

    _realSendEmail(url: string) {
        // 这个设备不支持。
        // Linking.canOpenURL(url)
        //     .then(supported => supported ?
        //         Linking.openURL(url) : ToastAndroid.show('该设备不支持发送邮件', ToastAndroid.SHORT))
        //     .catch(e => ToastAndroid.show('发送邮件失败' + e, ToastAndroid.SHORT));

        NativeModules.LinksUtilInterface.sendEmail(url).then(success => {
        }).catch(e => ToastAndroid.show('发送邮件失败' + e.code || '', ToastAndroid.SHORT));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={CommonColor.primaryColor}
                />
                <FlatList
                    data={this.state.partment}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e5e5e5'}}/>}
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefresh}
                                        onRefresh={() => this._fetchUsers()}
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
        flex: 1,
        backgroundColor: 'white',
    }
});
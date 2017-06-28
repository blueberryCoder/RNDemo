/**
 * Created by blueberry on 6/27/2017.
 * @flow
 *
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    findNodeHandle,
    Button,
    ToastAndroid,
    AsyncStorage,
} from 'react-native';
import {CommonColor} from '../CommonStyle';

import Util from '../util';
import Service from '../service';

export default class AddContact extends Component {
    static navigationOptions = {
        title: '添加联系人',
        headerStyle: {backgroundColor: CommonColor.primaryColor},
        headerTintColor: 'white',
    }

    _selectColor = '#71c1ff'
    _unselectColor = 'white'
    _partments = ['框架研发', 'BU产品', 'BU研发', '启明星', '项目管理', '公共产品']
    _tags = ['研发', '产品', '项目']

    _selectedPartmentIndex = null
    _selectedTagIndex = null

    _username = null
    _password = null
    _email = null
    _phone = null

    _create() {
        // 1.check
        if (!this._username || !this._password || !this._email
            || !this._phone || !this._selectedTagIndex || !this._selectedPartmentIndex) {
            ToastAndroid.show('请输入用户信息并选择部门', ToastAndroid.SHORT);
        }

        // 2. fetch
        AsyncStorage.getItem('username')
            .then(value => {
                Util.post(Service.host + Service.createUser, {
                    key: Util.key,
                    partment: this._partments[this._selectedPartmentIndex],
                    password: this._password,
                    tel: this._phone,
                    username: this._username,
                    email: this._email,
                    tag: this._tags[this._selectedTagIndex],
                    creater: value
                }, (data: any) => {
                    if (data.status) {
                        // success!!!
                        ToastAndroid.show('添加成功', ToastAndroid.SHORT);
                        this.props.navigation.goBack();
                    }
                });
            })
            .catch(e => {
                ToastAndroid.show('您未登录');
            })
    }

    state = {
        verticalOffset: 0,
    }

    _inputFocused(input: string) {
        switch (input) {
            case 'name':
                this.setState({verticalOffset: 1});
                break;
            case 'password':
                this.setState({verticalOffset: 1});
                break;
            case 'email':
                this.setState({verticalOffset: 1});
                break;
            case 'phone':
                this.setState({verticalOffset: 40});
                break;
        }
    }

    render() {
        let partmentItems = this._generatePartmentItem();
        let tagItems = this._generateTagItems();

        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    contentContainerStyle={styles.container}
                >
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={this.state.verticalOffset}
                        behavior={'position'}
                        contentContainerStyle={styles.keyboardAvoidingView}
                    >
                        <View
                            style={styles.row}
                        >
                            <Text
                                style={styles.textKey}
                            >
                                用户名
                            </Text>
                            <TextInput
                                style={styles.textValue}
                                placeholder={'请输入用户名'}
                                onFocus={this._inputFocused.bind(this, 'name')}
                                onChangeText={text => this._username = text}
                            />
                        </View>

                        <View
                            style={styles.row}
                        >
                            <Text
                                style={styles.textKey}

                            >密码</Text>
                            <TextInput
                                style={styles.textValue}
                                placeholder={'请输入密码'}
                                onFocus={this._inputFocused.bind(this, 'password')}
                                onChangeText={text => this._password = text}
                                secureTextEntry={true}/>

                        </View>

                        <View
                            style={styles.row}
                        >
                            <Text
                                style={styles.textKey}

                            >邮箱</Text>
                            <TextInput
                                ref="emailInput"
                                style={styles.textValue}
                                onFocus={this._inputFocused.bind(this, 'email')}
                                placeholder={'请输入邮箱'}
                                onChangeText={text => this._email = text}
                                keyboardType={'email-address'}
                            />
                        </View>

                        <View
                            style={styles.row}

                        >
                            <Text
                                style={styles.textKey}

                            >电话</Text>


                            <TextInput
                                ref="phoneInput"
                                onFocus={this._inputFocused.bind(this, 'phone')}
                                style={styles.textValue}
                                placeholder={'请输入电话'}
                                onChangeText={text => this._phone = text}
                                keyboardType={'numeric'}
                            />
                        </View>

                        <View
                            style={styles.partmentRow}
                        >
                            {partmentItems.slice(0, 3)}
                        </View>
                        <View
                            style={styles.partmentRow}
                        >
                            {
                                partmentItems.slice(3, 6)
                            }
                        </View>
                        <View
                            style={styles.tagRow}
                        >
                            {
                                tagItems.slice(0, 3)
                            }
                        </View>

                        <View style={styles.createButton}>
                            <Button title="创建用户" onPress={this._create.bind(this)}/>
                        </View>
                    </KeyboardAvoidingView>

                </ScrollView>
            </View>
        );
    }

    _generateTagItems() {
        return this._tags.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        this._selectedTagIndex === index
                            ? this._selectedTagIndex = null
                            : this._selectedTagIndex = index;

                        this.setState({});
                    }}
                >
                    <Text style={[styles.itemTextStyle,
                        {
                            backgroundColor: this._selectedTagIndex === index
                                ? this._selectColor
                                : this._unselectColor,
                            color: this._selectedTagIndex === index
                                ? 'white'
                                : 'black',
                        }]}
                    >{item}</Text>
                </TouchableOpacity>
            );
        });
    }

    _generatePartmentItem() {
        return this._partments.map((item, index) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this._selectedPartmentIndex === index
                            ? this._selectedPartmentIndex = null
                            : this._selectedPartmentIndex = index;

                        this.setState({});
                    }}
                    key={index}
                >
                    <Text style={[styles.itemTextStyle,
                        {
                            backgroundColor: this._selectedPartmentIndex === index
                                ? this._selectColor
                                : this._unselectColor,
                            color: this._selectedPartmentIndex == index
                                ? 'white'
                                : 'black',
                        }]}>{item}</Text>
                </TouchableOpacity>
            );
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: Util.size.width * 0.9,
    },

    itemTextStyle: {
        backgroundColor: this._unselectColor,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#eeeeee',
        textAlignVertical: 'center',
        includeFontPadding: false,
        padding: 4,
        width: 70,
        fontSize: 14,
    },
    keyboardAvoidingView: {
        alignItems: 'center',
    },

    textKey: {
        color: 'black',
    },

    textValue: {
        width: Util.size.width * 0.75,
        borderColor: '#eeeeee',
        borderWidth: 1,
        margin: 1,
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 4,
    },

    partmentRow: {
        alignItems: 'center',
        width: Util.size.width * 0.65,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    tagRow: {
        alignItems: 'center',
        width: Util.size.width * 0.65,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    createButton: {
        width: Util.size.width * 0.6,
        marginTop: 20,

    }


});
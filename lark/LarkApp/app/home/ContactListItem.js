/**
 * Created by blueberry on 6/26/2017.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {CommonColor} from '../CommonStyle';

export default class ContactListItem extends Component {


    render() {
        return (<View style={styles.container}>
            <View
                style={[styles.iconStyle, {backgroundColor: CommonColor.getRandomColor()}]}>
                <Text style={styles.iconTextStyle}>{this.props.data.username.substr(0, 1) || '未'}</Text>
            </View>

            <View style={styles.partmentStyle}>
                <Text style={styles.nameText}>{this.props.data.username}</Text>
                <Text
                    style={styles.partmentInfoText}>{this.props.data.partment + '部-' + this.props.data.tag + '人员'}</Text>
            </View>

            <View style={styles.personInfoStyle}>
                <TouchableOpacity
                    onPress={() => this.props.onPhoneClick(this.props.data.username, this.props.data.tel)}>
                    <Text style={styles.blueText}>
                        {this.props.data.tel}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.onEmailClick(this.props.data.username, this.props.data.email)}
                >
                    <Text style={styles.blueText}>
                        {this.props.data.email}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>);
    }
}

ContactListItem.propTypes = {
    data: React.PropTypes.shape({
        username: React.PropTypes.string,
        partment: React.PropTypes.string,
        email: React.PropTypes.string,
        tel: React.PropTypes.string,
        tag: React.PropTypes.string,
    }).isRequired,

    onPhoneClick: React.PropTypes.func,
    onEmailClick: React.PropTypes.func,

}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },

    iconStyle: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    partmentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    personInfoStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },


    iconTextStyle: {
        color: 'white',
        fontSize: 30,
    },

    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    partmentInfoText: {
        fontSize: 14,
    },

    blueText: {
        color: '#63c4fc',
        fontSize: 14,
    }

});
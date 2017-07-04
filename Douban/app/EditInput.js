/**
 * Created by blueberry on 7/3/2017.
 * @flow
 */

import React, {Component} from 'react';

import {AppRegistry, StyleSheet, View, Text, TextInput} from 'react-native';
import Util from './Util';

export default class EditInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    onSubmitEditing={this.props.onSubmitEditing}
                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

EditInput.propTypes = {
    placeholder: React.PropTypes.string,
    onSubmitEditing: React.PropTypes.func,
    onChangeText: React.PropTypes.func,
}


var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        padding: 20,
        backgroundColor: 'white',

    },

    textInput: {
        width: '100%',
        flex: 1,
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderRadius: 4,
    }


});

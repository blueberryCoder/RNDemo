/**
 * Created by blueberry on 6/17/2017.
 *
 * @flow
 */


import  React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Alert, Image, Dimensions, PanResponder} from 'react-native';
let totalWidth = Dimensions.get('window').width;


class Main extends Component {

    _watcher = null

    _position = 0

    _intercept = false;

    componentWillMount() {
        this._watcher = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this._intercept = true;
            },
            onPanResponderMove: (e, gestureState) => {
                if (!this._intercept) return;

                this._position = Math.max(0,Math.min(totalWidth-20-20,gestureState.moveX - gestureState.x0));

                if (gestureState.moveX >= totalWidth - 20 - 20) {
                    Alert.alert('接听')
                    this._intercept = false;
                }

                this.setState({});

            },
            onPanResponderEnd: (e, gestureState) => {
                this._position = 0;
                this._intercept = false;
                this.setState({});

            },

        });

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <Image {...this._watcher.panHandlers} style={[styles.img, {left: this._position}]}
                           source={require('./img/phone_call.png') }/>
                </View>
            </View>
        );

    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    firstRow: {
        flexDirection: 'row',
        left: 20,
        width: totalWidth - 40,
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 20,
    },

    img: {
        width: 40,
        height: 40,
        borderRadius: 20,

    }

});

AppRegistry.registerComponent('PanResponderUsage', () => Main);

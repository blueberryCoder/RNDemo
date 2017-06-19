/**
 * Created by blueberry on 6/17/2017.
 *
 * @flow
 *
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Dimensions, PanResponder, Alert} from 'react-native';

//屏幕宽
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

// 扩展圆的宽度
let extRoundWidth = totalWidth / 2;

let imgWidth = 50;

class Main extends Component {

    callCenterX = totalWidth / 4
    callCenterY = totalHeight / 2

    hangUpCenterX = totalWidth - totalWidth / 4
    hangUpCenterY = totalHeight / 2

    callLeft = this.callCenterX - extRoundWidth / 2
    callTop = this.callCenterY - extRoundWidth / 2

    hangUpLeft = this.hangUpCenterX - extRoundWidth / 2
    hangUpTop = this.hangUpCenterY - extRoundWidth / 2

    callImgLeft = extRoundWidth / 2 - imgWidth / 2
    callImgTop = extRoundWidth / 2 - imgWidth / 2

    callImgLeftOffset = 0
    callImgTopOffset = 0

    hangUpImgLeft = extRoundWidth / 2 - imgWidth / 2
    hangUpImgTop = extRoundWidth / 2 - imgWidth / 2

    hangUpImgLeftOffset = 0
    hangUpImgTopOffset = 0


    _leftWatcher = null;
    _rightWatcher = null;
    _leftIntercept = false;
    _rightIntercept = false;

    componentWillMount() {
        this._leftWatcher = PanResponder.create({
            onStartShouldSetPanResponder: () => true,

            onPanResponderGrant: (e, gestureState) => {
                this._leftIntercept = true;
            },

            onPanResponderMove: (e, gestureState) => {
                if (!this._leftIntercept) return;

                this.callImgLeftOffset = gestureState.moveX - gestureState.x0;
                this.callImgTopOffset = gestureState.moveY - gestureState.y0;

                if (this._calculateDistance(
                        this.callImgLeftOffset, this.callImgTopOffset) > extRoundWidth / 2 - imgWidth / 2) {

                    this._leftIntecept = false;
                    Alert.alert('接听');
                    return
                }
                this.setState({});

            },

            onPanResponderEnd: (e, gestureState) => {
                this._leftIntecept = false;
                this.callImgTopOffset = 0;
                this.callImgLeftOffset = 0;
                this.setState({});

            },
        });

        this._rightWatcher = PanResponder.create({
            onStartShouldSetPanResponder: () => true,

            onPanResponderGrant: (e, gestureState) => {
                this._rightIntercept = true;
            },

            onPanResponderMove: (e, gestureState) => {
                if (!this._rightIntercept) return;

                this.hangUpImgLeftOffset = gestureState.moveX - gestureState.x0;
                this.hangUpImgTopOffset = gestureState.moveY - gestureState.y0;

                if (this._calculateDistance(
                        this.hangUpImgLeftOffset, this.hangUpImgTopOffset) > extRoundWidth / 2 - imgWidth / 2) {

                    this._rightIntercept = false;
                    Alert.alert('挂断');
                    return
                }
                this.setState({});

            },

            onPanResponderEnd: (e, gestureState) => {
                this._rightIntercept = false;
                this.hangUpImgTopOffset = 0;
                this.hangUpImgLeftOffset = 0;
                this.setState({});

            },
        });
    }

    _calculateDistance(x: number, y: number): number {
        return Math.hypot(x, y);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={{
                        position: 'absolute',
                        left: this.callLeft,
                        top: this.callTop,
                        backgroundColor: 'green',
                        width: extRoundWidth,
                        height: extRoundWidth,
                        borderRadius: extRoundWidth / 2,
                    }}>
                        <Image style={[styles.img, {
                            left: this.callImgLeft + this.callImgLeftOffset,
                            top: this.callImgTop + this.callImgTopOffset
                        }]}
                               source={require('./img/phone_call.png')}
                               {...this._leftWatcher.panHandlers}
                        />
                    </View>
                    <View style={{
                        position: 'absolute',
                        left: this.hangUpLeft,
                        top: this.hangUpTop,
                        backgroundColor: 'red',
                        width: extRoundWidth,
                        height: extRoundWidth,
                        borderRadius: extRoundWidth / 2,
                    }}>
                        <Image style={[styles.img, {
                            left: this.hangUpImgLeft + this.hangUpImgLeftOffset,
                            top: this.hangUpImgTop + this.hangUpImgTopOffset
                        }]}
                               source={require('./img/phone_hang_up.png')}
                               {...this._rightWatcher.panHandlers}

                        />
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    firstRow: {
        flexDirection: 'row',
    },

    img: {
        width: imgWidth,
        height: imgWidth,
    }

});

AppRegistry.registerComponent('PanResponderUsage', () => Main);

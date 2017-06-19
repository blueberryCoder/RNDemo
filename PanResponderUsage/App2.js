/**
 * Created by blueberry on 6/16/2017.
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Dimensions, PanResponder, Alert,Text} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

let itemWidth = totalWidth / 12;

class Main extends Component {

    _watcher = null
    _intercept = false
    _startLeft = false
    colorArray = ['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey']
    state = {}

    componentWillMount() {
        this._watcher = PanResponder.create({
            onStartShouldSetPanResponder(){
                return true;
            },

            /**
             * 用箭头函数可以绑定this
             * @param evt
             * @param gestureState
             */
            onPanResponderGrant: (evt, gestureState) => {
                if (gestureState.x0 > 20 && gestureState.x0 < 20 + itemWidth) {
                    this._intercept = true;
                    this._startLeft = true
                    this.colorArray[0] = 'green';
                } else if (gestureState.x0 > 20 + itemWidth * 9 && gestureState.x0 < itemWidth * 10 + 20) {
                    this._intercept = true;
                    this._startLeft = false;
                    this.colorArray[9] = 'red';
                } else {
                    this._intercept = false;
                }

                this.setState({});
            },

            /**
             * 使用箭头函数可以绑定this
             * @param evt
             * @param gestureState
             */
            onPanResponderMove: (evt, gestureState) => {
                if (!this._intercept) {
                    return
                }

                if (this._startLeft) {
                    let index = Math.round((gestureState.moveX - 20) / itemWidth);
                    if (index == 10) {
                        Alert.alert('接听');
                        this._intercept = false;
                    }
                    index = Math.min(9, Math.max(0, index));
                    for (let i = 0; i <= index; i++) {
                        this.colorArray[i] = 'green';

                    }
                } else {
                    let index = Math.round((gestureState.moveX - 20) / itemWidth);
                    if (index == 0) {
                        Alert.alert('挂断');
                        this._intercept = false;
                    }
                    index = Math.min(9, Math.max(0, index));
                    for (let i = 9 - index; i >= 0; i--) {
                        this.colorArray[9 - i] = 'red';
                    }
                }

                this.setState({});
            },

            /**
             * 使用箭头函数可以绑定this
             * @param evt
             * @param gestureState
             */
            onPanResponderEnd: (evt, gestureState) => {
                this._intercept = false;
                this._startLeft = false;
                this.colorArray = this.colorArray.map(() => 'grey');
                this.setState({});

            }
        });
    }

    render() {
        let array = this.colorArray.map((color: string, number: number) =>
            <View key={number} style={[styles.item, {backgroundColor: color}]}/>
        );

        return (<View style={styles.container}>
            <Text>左滑挂断，右滑接听</Text>
            <View style={styles.barStyle}
                  {...this._watcher.panHandlers}
            >
                {array}
            </View>
        </View>);
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    barStyle: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: 20
    },

    item: {
        height: 80,
        width: itemWidth,
    }
});
AppRegistry.registerComponent('PanResponderUsage', () => Main);

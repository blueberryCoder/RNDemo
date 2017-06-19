/**
 * Created by blueberry on 6/19/2017.
 */

import React from 'react';
import {AppRegistry, StyleSheet, View, Text, PanResponder} from 'react-native';

class Main extends React.Component {

    state = {content: ''}
    _watcher = null

    componentWillMount() {
        this._watcher = PanResponder.create({
            // onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.setState(state => ({
                    content: 'onPanResponderGrant'
                }));

                // this.setState({content:'onPanResponderGrant'});
            },
            onPanResponderMove: (e, gestureState) => {
                this.setState(state => ({
                    content: state.content + '\nonPanResponderMove'
                }));
            },
            onPanResponderEnd: (e, gestureState) => {
                this.setState(state => ({
                    content: state.content + '\nonPanResponderEnd'
                }));
            },

            onPanResponderRelease: (e, gestureState) => {
                this.setState(state => ({
                    content: state.content + '\nonPanResponderRelease'
                }));
            }
        });
    }


    render() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{height: 200, width: '100%', backgroundColor: 'blue'}}>{this.state.content}</Text>
                <View {...this._watcher.panHandlers}
                      style={{backgroundColor: 'red', marginTop: 20, height: 200, width: 200}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('PanResponderUsage', () => Main);

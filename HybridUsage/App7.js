/**
 * Created by blueberry on 6/20/2017.
 * 定位
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text,Vibration,Button} from 'react-native';

class Main extends Component {
    state = {position: ''}
    _watchId = null;

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            //success
            this.setState({position: position});
        }, (error) => {
            console.log(error);
        }, {
            enableHighAccuracy: true,//允许高精度定位
            timeout: 20000, //20秒没得到位置，停止获取
            maximumAge: 1000, //定位结果缓存1000 毫秒
        });

        this._watchId = navigator.geolocation.watchPosition((position) => {
            this.setState({position: position});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this._watchId);
    }

    render() {
        return (
            <View>
                <Text>
                    {JSON.stringify(this.state.position)}
                </Text>

                <Button title="震动" onPress={()=>Vibration.vibrate([1000,2000,3000,4000])}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
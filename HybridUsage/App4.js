/**
 * Created by blueberry on 6/20/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, TextInput, CameraRoll, Image, Button, Alert} from 'react-native';

class Main extends Component {

    state = {
        path: ''
    }

    render() {
        return (
            <View>
                <TextInput
                    defaultValue={'file:///sdcard/img.jpg'}
                    placeholder={'input img path'}
                    style={{width: '100%'}}
                    onChangeText={(text) => this.setState({path: text})}
                />

                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: this.state.path}}
                />

                <Button title="保存到相册" onPress={() => {
                    CameraRoll.saveToCameraRoll(this.state.path, 'photo')
                        .then(() => Alert.alert('保存成功'))
                        .catch(e => Alert.alert('保存失败'));
                }}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
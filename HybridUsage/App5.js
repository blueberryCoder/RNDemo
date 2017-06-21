/**
 * Created by blueberry on 6/20/2017.
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, Button, DatePickerAndroid, TimePickerAndroid, Picker} from 'react-native';

class Main extends Component {

    state = {
        date: '',
        time: '',
        pick: '',
    }

    render() {
        return (
            <View>
                <Text>{this.state.date}</Text>
                <Text>{this.state.time}</Text>
                <Text>{this.state.pick}</Text>
                <Button title="select date" onPress={() => {
                    DatePickerAndroid.open({date: new Date()})
                        .then(result => {
                            if (result.action !== DatePickerAndroid.dismissedAction) {
                                this.setState({date: result.year + '年' + result.month + '月' + result.day + '日'});
                            } else {
                                this.setState({date: '用户没有选择'});
                            }
                        })
                        .catch(e => console.log(e));
                }}/>
                <Button title="select time" onPress={() => {
                    TimePickerAndroid.open({hour: 14, minute: 20, is24Hour: false})
                        .then(result => {
                            if (result.action !== TimePickerAndroid.dismissedAction) {
                                this.setState({time: result.hour + '时' + result.minute + '分'});
                            } else {
                                this.setState({time: '没有选择'});
                            }
                        })
                        .catch(e => console.log(e));
                }}/>

                <Picker
                    mode={Picker.MODE_DROPDOWN}
                    selectedValue={'java'}
                    onValueChange={value => this.setState({pick: value})}
                >
                    <Picker.Item label='Java' value='java'/>
                    <Picker.Item label='Java Script' value='java script'/>
                    <Picker.Item label='Php' value='php'/>
                    <Picker.Item label='Python' value='Python'/>
                    <Picker.Item label='Ruby' value='ruby'/>

                </Picker>
            </View>
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
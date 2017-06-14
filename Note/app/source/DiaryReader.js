/**
 * Created by blueberry on 6/7/2017.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, Button, Text, StatusBar} from 'react-native';
import * as TimeUtils from './utils/TimeUtils';
import * as ImageUtils from './utils/EmotionUtils';

export default class DiaryReader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    animated={true}
                    translucent={false}
                    backgroundColor={'#5990f4'}
                    barStyle={'default'}
                />
                <View style={styles.firstRow}>
                    <Button title="返回" onPress={this.props.back}/>
                    <Button title="上一篇" onPress={this.props.pre}/>
                    <Button title="下一篇" onPress={this.props.next}/>
                </View>
                <View style={styles.secondRow}>
                    <Image style={styles.img} source={ImageUtils.getImage(this.props.emotion)}/>
                    <View style={styles.titleView}>
                        <Text style={[styles.textTitle]}>标题:{this.props.title}</Text>
                        <Text style={styles.textTitle}>时间：{TimeUtils.formatTime(this.props.time)}</Text>
                    </View>
                </View>
                <View style={{width: '100%', flex: 1}}>
                    <Text style={{
                        margin: 10,
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderRadius: 5,
                        flex: 1,
                    }}>{this.props.content}</Text>
                </View>

            </View>
        );
    }
}

DiaryReader.propTypes = {

    back: React.PropTypes.func.isRequired,

    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    emotion: React.PropTypes.string.isRequired,
    time: React.PropTypes.number.isRequired,
    pre: React.PropTypes.func.isRequired,
    next: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },

    secondRow: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
    },

    titleView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },

    img: {
        width: 80,
        height: 80,
    },

    textTitle: {
        backgroundColor: 'blue',
        width: '100%',
    },

    matchParent: {
        width: '100%',
        height: '100%',
    }

});
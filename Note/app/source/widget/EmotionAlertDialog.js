/**
 * Created by blueberry on 6/8/2017.
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { getImage, getDescription} from '../utils/EmotionUtils';
import type {EmotionEnum}from '../entity/Diary';
import {Emotion} from '../entity/Diary';
import * as ScreenUtils from '../utils/ScreenUtils';
export default class EmotionAlertDialog extends Component {

    emotion: Array<EmotionEnum> = [Emotion.BAD, Emotion.SAD, Emotion.SMILE, Emotion.WOOT, Emotion.HUH];

    render() {
        console.log(JSON.stringify(this.emotion));
        const items = this.emotion.map((emotion: EmotionEnum, index: number, array: Array<EmotionEnum>) => {
            return (<TouchableOpacity key={index + 'touchableOpacity'}
                                      style={styles.item}
                                      onPress={() => this.props.selectEmotion(emotion)}
            >
                <Image key={index + 'image'} source={getImage(emotion)} style={styles.img}/>
                <Text key={index + 'text'} style={styles.text}>{getDescription(emotion)}</Text>
            </TouchableOpacity>);
        });
        return (
            <View style={styles.container}>
                <View style={styles.dialog}>
                    {items}
                </View>
            </View>
        );
    }
}
EmotionAlertDialog.propTypes = {
    selectEmotion: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: ScreenUtils.SCREEN_HEIGHT,
        position: 'absolute',
        backgroundColor: 'rgba(52,52,52,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    dialog: {
        width: '80%',
        height: '80%',
        backgroundColor: 'grey',
        alignItems: 'center',
    },

    item: {
        width: '100%',
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    img: {
        width: 50,
        height: 50,
    },

    text: {
        flex: 1,
    }
});
/**
 * Created by blueberry on 6/7/2017.
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, StatusBar, Image} from 'react-native';
import {Diary, Emotion} from './entity/Diary'
import EmotionAlertDialog from './widget/EmotionAlertDialog';
import {getImage} from './utils/EmotionUtils';
import type {EmotionEnum} from './entity/Diary';
export  default class DiaryWriter extends Component {

    state = {
        selectEmotionDialog: false,
    }

    dataHolder = {
        title: '',
        content: '',
        mod: Emotion.BAD,
    }

    selectEmotion() {
        this.setState({selectEmotionDialog: true});
    }

    onTitleTextChange(text: ? string) {
        this.dataHolder.title = text || '';
    }

    onContentTextChange(text: ? string) {
        this.dataHolder.content = text || '';
    }

    onSelectedEmotion(emotion: EmotionEnum) {
        this.dataHolder.mod = emotion;
        console.log('onSelectedEmotion' + emotion);
        this.setState({selectEmotionDialog: false});
    }

    renderNormal() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    animated={true}
                    translucent={false}
                    backgroundColor={'#5990f4'}
                    barStyle={'default'}
                />

                <View style={[styles.firstRow, {marginTop: 10}]}>
                    <Button title="返回" onPress={this.props.back}/>
                    <Button title="选择表情" onPress={this.selectEmotion.bind(this)}/>

                    <Image style={{height: 50, width: 50}} source={getImage(this.dataHolder.mod)}/>

                    <Button title="保存" onPress={() => {
                        let diary = Diary.createDiary(this.dataHolder.title,
                            this.dataHolder.content, this.dataHolder.mod);
                        this.props.save(diary);
                    }}/>
                </View>
                <TextInput
                    style={{margin: 10, borderRadius: 5, borderWidth: 1, borderColor: 'grey'}}
                    placeholder={'请写入标题'}
                    onChangeText={this.onTitleTextChange.bind(this)}
                    defaultValue={this.dataHolder.title}
                />

                <View
                    // flex:1
                    style={[{width: '100%', flex: 1}]}>
                    <TextInput placeholder={'请写入日记正文'}
                               onChangeText={this.onContentTextChange.bind(this)}
                               defaultValue={this.dataHolder.content}
                               multiline={true}
                               style={ {borderWidth: 1, borderBottomColor: 'black', margin: 10, flex: 1}}
                    />
                </View>
                {
                    this.state.selectEmotionDialog && this.renderSelectEmotionDialog()
                }
            </View>
        );
    }

    renderSelectEmotionDialog() {
        return (
            <EmotionAlertDialog selectEmotion={this.onSelectedEmotion.bind(this)}/>
        );
    }

    render() {
        return this.renderNormal();
    }

}

/**
 * 属性确认
 * @type {{back: (*)}}
 */
DiaryWriter.propTypes = {
    back: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

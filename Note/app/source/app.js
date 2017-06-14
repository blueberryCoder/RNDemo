/**
 * Created by blueberry on 6/5/2017.
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, AsyncStorage, ToastAndroid} from 'react-native';
import DiaryList from './DiaryList';
import DiaryWriter from './DiaryWriter';
import DiaryReader from './DiaryReader';
import * as DataSourceUtil from './utils/DataSource';
import {Diary, Emotion} from './entity/Diary'
import * as DataSource from './utils/DataSource';

/**
 * 这个页面3中状态，列表状态，阅读状态，写状态
 */
export default class Note extends Component {


    /**
     * uiOption:1|2|3 ,1:显示列表页面，2：显示读页面，3：显示写页面，默认是1
     * @type {{uiOption: number}}
     */
    state = {uiOption: 1}

    diaryArray: Array<Diary> = Array();

    curPosition: number = 0;

    /**
     * 返回到主页（列表页面）
     */
    goBack() {
        this.setState({uiOption: 1});
    }

    /**
     * 显示可以写的页面
     */
    goWriteAblePager() {
        this.setState({uiOption: 3});
    }

    /**
     * 显示只读页面
     */
    goReadOnlyPager(index: number) {
        this.curPosition = index;
        this.setState({uiOption: 2});
    }

    componentWillMount(){
        this._getAllDiary();
    }

    /**
     * 保存日记
     */
    save(diary: Diary) {
        // 存储
        DataSource.saveDiary(diary)
            .then(() => {
                ToastAndroid.show('保存成功', ToastAndroid.SHORT);
                this._getAllDiary();
            }).catch((error) => {
            ToastAndroid.show('保存失败' + error, ToastAndroid.SHORT);
        });
    }

    /**
     * 获得所有的笔记信息
     * @private
     */
    _getAllDiary() {
        DataSourceUtil.getAllDiary()
            .then((obj: Array<Diary>) => {
                console.log('my note --------------：\n');
                console.log(JSON.stringify(obj));
                this.diaryArray = obj;
                this.diaryArray.sort((obj1: Diary, obj2: Diary) => {
                    return obj2.time - obj1.time;
                })

                this.setState({uiOption: 1});
            }).catch((error) => {
            console.error('读取错误' + error);
            ToastAndroid.show('读取笔记错误：' + error, ToastAndroid.SHORT);

        })
    }

    nextDiary() {
        this.curPosition++;
        if (this.curPosition > this.diaryArray.length - 1) {
            ToastAndroid.show('已经是最后一篇了~', ToastAndroid.SHORT);
        }

        this.curPosition = Math.max(0, Math.min(this.diaryArray.length - 1, this.curPosition));

        this.setState({});

    }

    preDiary() {
        this.curPosition--;
        if (this.curPosition < 0) {
            ToastAndroid.show('不能往前翻了~', ToastAndroid.SHORT);
        }

        this.curPosition = Math.max(0, Math.min(this.diaryArray.length - 1, this.curPosition));

        this.setState({});
    }

    /**
     * 显示日记列表页面
     * @returns {XML}
     */
    showDiaryList() {
        return (
            <DiaryList
                dirarys={this.diaryArray}
                goWriteAblePager={this.goWriteAblePager.bind(this)}
                goReadOnlyPager={this.goReadOnlyPager.bind(this)}
            />
        );
    }

    /**
     * 显示查看日记页面
     * @returns {XML}
     */
    showReadOnlyDiary() {
        let diary: Diary = this.diaryArray[this.curPosition] || Diary.createDiary('没有标题', '没有内容', Emotion.BAD);

        return (

            <DiaryReader
                title={diary.title}
                content={diary.content}
                emotion={diary.emotion}
                time={diary.time}
                pre={this.preDiary.bind(this)}
                next={this.nextDiary.bind(this)}
                back={this.goBack.bind(this)}
            />
        );
    }

    /**
     * 显示编辑日记页面
     * @returns {XML}
     */
    showWriteAbleDiary() {
        return (
            <DiaryWriter
                back={this.goBack.bind(this)}
                save={this.save.bind(this)}
            />
        );
    }

    render() {
        return this.state.uiOption == 1
            ? this.showDiaryList()
            : this.state.uiOption == 2
                ? this.showReadOnlyDiary()
                : this.showWriteAbleDiary();
    }
}

AppRegistry.registerComponent('Note', () => Note);

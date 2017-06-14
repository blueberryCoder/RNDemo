/**
 * Created by blueberry on 6/6/2017.
 * 表情icon取自：
 * http://www.easyicon.net/572432-Huh_emotion_icon.html
 *
 * 日记列表页面
 * @flow
 *
 */

import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    FlatList,
    StatusBar,
} from 'react-native';

import {CommonStyle} from './styles/CommonStyle';
import * as TimeUtils from './utils/TimeUtils';
import {getImage} from './utils/EmotionUtils';
import {Diary} from './entity/Diary';

export default class DiaryList extends Component {

    searchKeywordsChange(text: ?string) {
        console.log(text || '');
    }

    _renderItem = ({item, index}: { item: Diary, index: number }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.goReadOnlyPager(index)}
                style={{
                    height: 80,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderBottomColor: '#d5e8ff'
                }}>
                <Image style={{width: 80, height: 80,}}
                       source={getImage(item.emotion)}
                ></Image>
                <View style={{height: 80, justifyContent: 'center'}}>
                    <Text>标题:{item.title}</Text>
                    <Text>时间:{TimeUtils.formatTime(item.time)}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    _keyExtractor = (item: Diary, index: any) => index;

    render() {
        return (
            <View style={[CommonStyle.container,]}>
                <StatusBar
                    hidden={false}
                    animated={true}
                    translucent={false}
                    backgroundColor={'#5990f4'}
                    barStyle={'default'}
                />
                <View style={CommonStyle.firstRow}>
                    <TextInput
                        style={CommonStyle.searchBarTextInput}
                        clearButtonMode='while-editing'
                        placeholder='输入搜索关键字'
                        onChangeText={this.searchKeywordsChange}
                        underlineColorAndroid='transparent'
                    />
                    <View style={styles.buttonWrapperStyle}>
                        <Button title="写日记" style={{marginLeft: 10}} onPress={this.props.goWriteAblePager}/>
                    </View>
                </View>


                <FlatList
                    //这里使用padding:10 paddingBottom不起作用，不知道为什么。react native's api 0.45
                    //android 中，FlatList 貌似自带paddingClip=false那种效果，即滑动的时候，可以滑动到padding区域
                    style={{flex: 1, width: '100%', padding: 10,}}
                    data={this.props.dirarys}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={() => <View style={{height: 5}}/>} //分割线
                    // 底部加个空白，应对paddingBottom不起作用
                    ListFooterComponent={() => <View style={{height: 20}}/>} //尾部布局
                />

            </View>
        )
    }


}

DiaryList.propTypes = {
    goWriteAblePager: React.PropTypes.func.isRequired,
    goReadOnlyPager: React.PropTypes.func.isRequired,

    dirarys: React.PropTypes.array.isRequired,
}

var styles = StyleSheet.create(
    {
        buttonWrapperStyle: {
            marginLeft: 10,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',

        },
    }
);
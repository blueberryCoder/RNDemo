/**
 * 进度条随手指拖动
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder,
    ProgressBarAndroid,
    Dimensions,
} from 'react-native';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

export default class PanResponderUsage extends Component {

    _watcher = {};

    state = {
        progress: 0,
    }

    componentWillMount() {
        this._watcher = PanResponder.create({
                // 返回true，代表要处理后续的事件，返回false,则后续的方法讲不会被回调
                onStartShouldSetPanResponder: () => true,

                //第一次点击回调
                onPanResponderGrant: (evt, gestureState) => {

                    let progress = gestureState.x0 < 20
                        ? 0
                        : gestureState.x0 > totalWidth - 20
                            ? 1 :
                            (gestureState.x0 - 20) / (totalWidth - 20);

                    this.setState({progress: progress});

                },

                //move 回调
                onPanResponderMove: (evt, gestureState) => {

                    let progress = gestureState.moveX < 20
                        ? 0 :
                        gestureState.moveX > totalWidth - 20
                            ? 1 :
                            (gestureState.moveX - 20) / (totalWidth - 40);

                    this.setState({progress: progress});
                },
            }
        );


    }

    render() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid
                    style={styles.progressStyle}
                    styleAttr={'Horizontal'}
                    color={'red'}
                    indeterminate={false}
                    progress={this.state.progress}
                    //核心语句，监听ProgressBarAndroid手势
                    {...this._watcher.panHandlers}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    progressStyle: {
        width: totalWidth - 40,
    }
});

AppRegistry.registerComponent('PanResponderUsage', () => PanResponderUsage);

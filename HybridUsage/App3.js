/**
 * Created by blueberry on 6/20/2017.
 *
 * 使用CameraRoll读取本地图库
 */

import React, {Component} from 'react';

import {
    View,
    AppRegistry,
    StyleSheet,
    CameraRoll,
    Slider,
    Text,
    Image,
    FlatList,
    Dimensions
} from 'react-native';

let totalWidth = Dimensions.get('window').width;

class Main extends Component {
    _endCursor = null
    _hasMore = true
    state = {
        imgs: [],
    }

    componentWillMount() {
        this._loadMore();
    }

    _loadMore() {
        if (!this._hasMore)return;
        CameraRoll.getPhotos({first: 15, after: this._endCursor}).then(result => {
            if (result.edges) {
                this.setState((state) => {
                    return {imgs: state.imgs.concat(result.edges.map(item => item.node.image.uri))}
                });
            }

            this._hasMore = result.page_info.has_next_page;
            this._endCursor = result.page_info.end_cursor;

        }).catch(error => console.log(error));
    }

    render() {

        console.log(JSON.stringify(this.state.imgs));
        return (
            <View>
                <FlatList
                    data={this.state.imgs}
                    renderItem={({item}) => {
                        console.log(JSON.stringify(item))
                        return <Image key={item} style={{
                            marginLeft: 10,
                            marginTop: 10,
                            paddingRight: 10,
                            width: (totalWidth - 40) / 3,
                            height: (totalWidth - 40) / 3
                        }}
                                      source={{uri: item}}/>
                    }}
                    // ItemSeparatorComponent={() => <View style={{height: 10, width: 10}}/>}
                    keyExtractor={(data, index) => index}
                    numColumns={3}
                    onEndReachedThreshold={20}
                    onEndReached={() => {
                        this._loadMore();
                    }}
                />
            </View >
        );
    }
}

AppRegistry.registerComponent('HybridUsage', () => Main);
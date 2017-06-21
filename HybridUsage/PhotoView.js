/**
 * Created by blueberry on 6/20/2017.
 */

import React from 'react';
import {requireNativeComponent, View} from 'react-native';

// 两种中方式：
// 1.
let iface = {
    name: 'PhotoView',
    propTypes: {
        imgSource: React.PropTypes.string,
        onChange: React.PropTypes.func,
        ...View.propTypes  //支持View组件的所有属性
    }
}

var RCTPhotoView = requireNativeComponent('PhotoView', iface);


export default RCTPhotoView;


// 2.
//
// export default class PhotoView extends React.Component {
//
//     render() {
//
//         return (<RCTPhotoView
//             imgSource={this.props.imgSource}
//             onChange={this.props.onChange}
//             style={{width: '100%', height: '100%'}}
//         />);
//     }
// }
//
// PhotoView.propTypes = {
//     imgSource: React.PropTypes.string.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     ...View.propTypes,
// }
//
// var RCTPhotoView = requireNativeComponent('PhotoView', PhotoView, {nativeOnly: {onChange: false}});


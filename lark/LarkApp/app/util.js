/**
 * Created by blueberry on 6/23/2017.
 * @flow
 *
 */

import {Dimensions, PixelRatio} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

let pixelRatio = PixelRatio.get();

export default {
    pixel: 1 / pixelRatio,
    size: {
        width: totalWidth,
        height: totalHeight,
    },
    post: function (url: string, data: any, callback: (data: ?any) => void) {
        let fetchOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        fetch(url, fetchOption)
            .then(response => response.json())
            .then(json => callback(json))
            .catch(e => console.warn(e));
    },

    key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE',
}

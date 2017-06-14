/**
 * Created by blueberry on 6/8/2017.
 */

import {PixelRatio, Dimensions} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let DENSITY = PixelRatio.get();

export {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    DENSITY,
}
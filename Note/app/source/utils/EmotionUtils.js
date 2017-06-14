/**
 * Created by blueberry on 6/8/2017.
 * @flow
 *
 */

import type {EmotionEnum} from '../entity/Diary';
import {Emotion} from '../entity/Diary';

let BAD = require('../../img/bad.png');
let HUH = require('../../img/huh.png');
let SAD = require('../../img/sad.png');
let SIMILE = require('../../img/smile.png');
let WOOT = require('../../img/woot.png');

export function getImage(emotion: EmotionEnum) {
    switch (emotion) {
        case Emotion.BAD:
            return BAD;
        case Emotion.HUH:
            return HUH;
        case Emotion.SAD:
            return SAD;
        case Emotion.SMILE:
            return SIMILE;
        case Emotion.WOOT:
            return WOOT;
    }
}

export function getDescription(emotion: EmotionEnum): string {
    switch (emotion) {
        case Emotion.BAD:
            return '不好';
        case Emotion.HUH:
            return '哼~';
        case Emotion.SAD:
            return '难过';
        case Emotion.SMILE:
            return '嘿嘿';
        case Emotion.WOOT:
            return '惊讶';
        default:
            return '';
    }
}

export {BAD, HUH, SAD, SIMILE, WOOT}
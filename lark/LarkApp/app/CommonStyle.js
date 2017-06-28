/**
 * Created by blueberry on 6/26/2017.
 * @flow
 *
 */

import {StyleSheet} from 'react-native';

let CommonStyle = StyleSheet.create({
    toolbar: {
        height: 56,
        backgroundColor: '#3394fa'
    },

});

let CommonColor = {
    primaryColor: '#3394fa',
    randomColors: ['#E20079', '#FFd602', '#25BFFE', '#F90000', '#02E246', '#02e246', '#00AFC9'],

    getRandomColor(){
        return this.randomColors[Math.floor(Math.random() * this.randomColors.length)];
    }
}

export {
    CommonStyle,
    CommonColor,
};
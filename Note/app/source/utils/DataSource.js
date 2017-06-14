/**
 * Created by blueberry on 6/7/2017.
 * @flow
 */

import {AsyncStorage} from 'react-native';
import {Diary} from '../entity/Diary'

/**
 * 保存日记实体，键为日记中的时间
 * @param diary 日记实体
 * @returns {*|Promise} 返回值
 */
export function saveDiary(diary: Diary): Promise<Object> {
    return AsyncStorage.setItem(diary.time + '', JSON.stringify(diary));
}

/**
 * 获得所有的日记实体
 * @param callback 回调函数
 * @returns {Promise} promise
 */
export function getAllDiary(callback?: ?(error: ?string, result: ?Array<Diary>) => void): Promise<Array<Diary>> {
    return new Promise((resolve, reject) => {
        AsyncStorage.getAllKeys()
            .then((keys) => {
                AsyncStorage.multiGet(keys).then((datas) => {

                    let j = datas.length || 0;
                    let diaryArray: Array<Diary> = Array();
                    for (let i = 0; i < j; i++) {
                        // get value,注意这里用 data[i][1] 取的值
                        // 因为data[i][0] 是 key
                        // data[i][1] 是 value
                        diaryArray[i] = JSON.parse(datas[i][1]);
                    }

                    callback && callback(null, diaryArray);
                    resolve(diaryArray);
                }).catch((error) => {
                    reject(error)
                });
            })
            .catch((error) => {
                reject(error);
            })
    });
}
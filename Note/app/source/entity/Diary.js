/**
 * Created by blueberry on 6/7/2017.
 *
 * 日记实体
 * @flow
 */

// 心情枚举
// https://flow.org/en/docs/types/utilities/
//
export type EmotionEnum = 'Bad' | 'Huh' | 'Sad' | 'SMILE' | 'WOOT'

class Emotion {
    static BAD = 'Bad'
    static HUH = 'Huh'
    static SAD = 'Sad'
    static SMILE = 'SMILE'
    static WOOT = 'WOOT'
}

class Diary {

    title: string
    content: string
    emotion: EmotionEnum
    time: number

    /**
     * 创建一个日记实体
     * @param title 标题
     * @param content 内容
     * @param mode 心情
     * @returns {Diary}
     */
    static createDiary(title: string, content?: ?string, mode?: ?EmotionEnum, time?: ?number): Diary {
        return new Diary(title, content, mode, time);
    }

    constructor(title: string, content?: ?string, mod?: ?EmotionEnum, time?: ?number) {
        this.title = title;
        this.content = content || '';
        this.emotion = mod || 'Bad';
        this.time = time || new Date().getTime();
    }
}

export {
    Emotion, Diary
}




/**
 * Created by blueberry on 6/27/2017.
 * @flow
 */

'use strict';


//观察者
type Subscriber = {
    type: string,
    fun: (data: Event | undefined) => void,
}

// 事件类型
type Event = {
    type: string,
    data?: any,
}

export default class EventBus {


    static INSTANCE = new EventBus();

    _subscribers = [];

    register(subscriber: Subscriber) {
        this._subscribers.push(subscriber);
    }

    unRegister(subscriber: Subscriber) {
        let index: number = this._subscribers.indexOf(subscriber);
        if (index > -1) {
            this._subscribers.splice(index, 1);
        }
    }

    sendEvent(event: Event) {
        let sub = this._subscribers.filter((item, index) => {
            return item.type === event.type;
        });

        console.log(JSON.stringify(sub))
        sub.forEach((item, number) => {
            item && item.fun && item.fun(event);
        });
    }
}

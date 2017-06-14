/**
 * Created by blueberry on 6/7/2017.
 *
 * @flow
 *
 */

export function formatTime(timestamp: number): string {
    let date: Date = new Date(timestamp);
    return date.toLocaleDateString().replace(/\//g, '-') + ' ' + date.toTimeString().substr(0,8);
}
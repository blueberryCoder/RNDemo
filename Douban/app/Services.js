/**
 * Created by blueberry on 7/3/2017.
 *
 * @flow
 */

const URL = {
    BASE_URL: ' https://api.douban.com/v2/',

    // 搜索图书 https://developers.douban.com/wiki/?title=book_v2#get_book_search
    BOOK_SEARCH: 'book/search',
    // 获取图书信息 https://developers.douban.com/wiki/?title=book_v2#get_book
    BOOK_INFO: 'book/',

    //电影搜索 https://developers.douban.com/wiki/?title=movie_v2#search
    MOVIE_SEARCH: 'movie/search',

    //音乐搜索 https://developers.douban.com/wiki/?title=music_v2#get_music_search
    MUSIC_SEARCH: 'music/search',

}

const Http = {
    get(url: string, callback?: (data: any) => void, errorCallback?: (e: any) => void): Promise{
        return new Promise((resolve, reject) => {
            let options = {
                method: 'GET',
            };
            fetch(url, options)
                .then(response => response.json())
                .then(json => {
                    callback && callback(json);
                    resolve(json);
                })
                .catch(e => {
                    errorCallback && errorCallback(e);
                    reject(e);
                });
        });
    },

    post(url: string, data: Object, callback?: (data: any) => void, errorCallback?: (e: any) => void): Promise
    {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data)
            };

            fetch(url, options)
                .then(response => response.json())
                .then(json => {
                    callback && callback(json);
                    resolve(json);
                }).catch(e => {
                errorCallback && errorCallback(e);
                reject(e);
            });
        });

    }

}

export {
    URL, Http,
}
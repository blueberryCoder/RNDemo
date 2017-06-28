/**
 * Created by blueberry on 6/22/2017.
 */

var fs = require('fs');

module.exports = function (app) {
    var FS_PATH_SERVICES = './routes/services/';
    var REQUIRE_PATH_SERVICES = './services/';

    // 异步，设置不行。。。
    // fs.readdir(FS_PATH_SERVICES, function (err, list) {
    //     if (err) {
    //         throw '没有找到文件夹.请检查....';
    //     }
    //
    //     for (var e; list.length && (e = list.shift());) {
    //
    //         console.log(REQUIRE_PATH_SERVICES + e);
    //         var service = require(REQUIRE_PATH_SERVICES + e);
    //
    //         service.init && service.init(app);
    //     }
    // });

    //  使用同步。
    var list = fs.readdirSync(FS_PATH_SERVICES);
    for (var e; list && list.length && (e = list.shift());) {
        var service = require(REQUIRE_PATH_SERVICES + e);
        service.init && service.init(app);
    }
}
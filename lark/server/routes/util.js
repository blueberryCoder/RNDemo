/**
 * Created by blueberry on 6/22/2017.
 */

var crypto = require('crypto');
module.exports = {
    guid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            return c == 'x' ? r : (r & 0x3 | 0x8).toString(16);
        }).toUpperCase();
    },
    md5: function (password) {
        var md5 = crypto.createHash('md5');
        var salt = '(!%$88hs@gophs*)#sassb9';
        var newPwd = md5.update(password + salt).digest('hex');
        return newPwd;
    },

    getKey: function () {
        return 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE';
    }
}

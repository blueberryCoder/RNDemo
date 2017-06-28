/**
 * Created by blueberry on 6/22/2017.
 */


var express = require('express');
var router = express.Router();


var Test = {
    init: function (app) {
        router.get('/test', this.test);
        router.get('/show',this.show);
        app.use('/test', router);
    },

    test: function (req, res, next) {
        res.send({status: 1, info: '测试Test.'});
    },

    show: function (req, res, next) {
        res.send({status: 1, info: '测试show.'});
    }


};

module.exports = Test;

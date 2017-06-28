/**
 * Created by blueberry on 6/22/2017.
 */
var express = require('express');
var router = express.Router();
var util = require('../util');
var fs = require('fs');

var USER_PATH = './database/user.json';

var User = {
    init: function (app) {
        //
        router.post('/get', this.getUser);
        router.post('/create', this.addUser);
        router.post('/login', this.login);
        router.post('/login/token', this.loginByToken);
        router.post('/password/update', this.updatePassword);
        router.post('/delete', this.deleteUser);

        // router.get()

        app.use('/user', router);

    },

    // 获取用户信息
    getUser: function (req, res) {
        var key = req.param('key');
        var partment = req.param('partment');
        if (key !== util.getKey()) {
            return res.send({status: 0, data: '使用了没有鉴权的key'});
        }

        fs.readFile(USER_PATH, function (err, data) {
            if (!err) {
                try {
                    var obj = JSON.parse(data);
                    var newObj = [];
                    for (var i in obj) {
                        if (obj[i].partment === partment) {
                            delete obj[i]['password'];
                            newObj.push(obj[i]);
                        }
                    }
                    return res.send({status: 1, data: newObj});
                } catch (e) {
                    return res.send({status: 0, err: e});
                }
            }
        });
    },

    // 添加用户
    addUser: function (req, res) {
        var username = req.param('username');
        var password = util.md5(req.param('password'));
        var tel = req.param('tel');
        var email = req.param('email');
        var partment = req.param('partment');
        var tag = req.param('tag');
        var creater = req.param('creater');

        if (!username || !password || !tel || !email || !partment || !tag || !creater) {
            return res.send({status: 0, data: '缺少必要参数'});
        }

        try {
            var content = JSON.parse(fs.readFileSync(USER_PATH));
            var obj = {
                "userid": util.guid(),
                "username": username,
                "password": password,
                "partment": partment,
                "tel": tel,
                "email": email,
                "tag": tag,
                "creater": creater,
                "time": new Date(),
                "token": '',
            }
            content.push(obj);

            fs.writeFileSync(USER_PATH, JSON.stringify(content));
            delete obj.password;
            return res.send({status: 1, data: obj});
        } catch (e) {
            return res.send({status: 0, err: e});
        }
    },

    // 用户登陆
    login: function (req, res) {
        var email = req.param('email');
        var password = util.md5(req.param('password'));
        var deviceId = req.param('deviceId');
        var token = util.guid() + deviceId;
        var content = JSON.parse(fs.readFileSync(USER_PATH));
        for (var i in content) {
            if (content[i].email === email && content[i].password === password) {
                content[i]['token'] = token;
                console.log(content[i]);
                fs.writeFileSync(USER_PATH, JSON.stringify(content));
                delete content[i].password;
                return res.send({status: 1, data: content[i]});
            }
        }

        return res.send({status: 0, data: '用户名或者密码错误'});
    },

    // 通过token登录
    loginByToken: function (req, res) {
        var token = req.param('token');
        if(!token){
            return res.send({status:0,info:'token失效'});
        }
        var content = JSON.parse(fs.readFileSync(USER_PATH));
        for (var i in content) {
            if (token === content[i].token) {
                delete content[i].password;
                return res.send({
                    status: 1,
                    data: content[i],
                });
            }
        }

        return res.send({status: 0, info: 'token失效'});
    },

    // 用户修改密码
    updatePassword: function (req, res) {
        var token = req.param('token');
        var oldPassword = util.md5(req.param('oldPassword'));
        var password = util.md5(req.param('password'));
        var content = JSON.parse(fs.readFileSync(USER_PATH));
        for (var i in content) {
            if (token === content[i].token && oldPassword === content[i].password) {
                content[i].password = password;
                fs.writeFileSync(USER_PATH, JSON.stringify(content));

                return res.send({status: 1, data: '更新成功'});
            }
        }

        return res.send({status: 0, data: '更新失败，没有找到该用户或者初始密码错误'});
    },

    // 删除用户
    deleteUser: function (req, res) {
        var token = req.param('token');
        var email = req.param('email');
        var content = JSON.parse(fs.readFileSync(USER_PATH));
        for (var i in content) {
            if (token === content[i].token) {
                for (var j in content) {
                    if (content[j].email === email) {
                        content.splice(j, 1);
                        fs.writeFileSync(USER_PATH, JSON.stringify(content));
                        return res.send({status: 1, info: content, data: '删除成功'});
                    }
                }
            }
        }

        return res.send({status: 0, err: '删除失败，没有找到用户或者用户鉴权错误'});
    }
}

module.exports = User;
var apibase = require('../../tools/apibase');
var mongoDb = require('../../../db/mongo');
var user = {};
user.info = function(uid,callback) {
    userModel.info(uid, callback);
}

user.registe = function(info, callback) {
    //整理数据，后交给模型来处理

    var timestamp = Date.now();
    var info_after = {
        username : info.username,
        password : info.password,
        realname : info.realname,
        create_time : timestamp,
        update_time : timestamp
    }
    // console.log(info_after);
    mongoDb.save('user_info_data', info_after, callback);
}

user.find = function(condition, callback) {
    userModel.find(condition, callback);
    return;
}

user.login = function(info, callback) {
    var username = info.username;
    var password = info.password;
    mongoDb.findOne('user_info_data',{username:username},callback);
}

module.exports = user;
var user = {};
// var redis = require('../../../db/redis');
var mongo = require('../../../db/mongo');
var querystring = require('querystring');

user.registe = function(name, sex, birthday, password, callback) {
    mongo.save('userlist', [{'name':name}, {'name':name, 'sex':sex, 'birthday':birthday, 'password':password}],function(err, result) {
        if (err) {
            callback(1, '插入失败',null);
            return;
        }
        callback(0, '', result);
        return;
    })
}

module.exports = user;
var agent = {};
var mongo = require('../../db/mongo');
var user  = require('./sub/user');

agent.info = function(name, callback) {
    mongo.findOne('userlist',{'name':name}, callback);
}

agent.registe = function(name, sex, birthday, password, callback) {
    user.registe(name, sex, birthday, password, callback);
} 

module.exports = agent;
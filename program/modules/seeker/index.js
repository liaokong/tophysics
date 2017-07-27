var seeker = {};
var user = require('./sub/user');
seeker.userinfo = function (userid, callback) {
    user.info(userid,callback);
}

seeker.registe = function(info,callback) {
	user.registe(info, callback);
}

seeker.find = function(condition, callback) {
	user.find(condition, callback);
}

seeker.login = function(info, callback) {
  user.login(info, callback);
}



module.exports = seeker;
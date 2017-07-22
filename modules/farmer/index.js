var farmer = {};
var user   = require('./sub/user');
//农民注册地址
farmer.registe = function(name, password, phone, gender, birthday, email, callback) {
    user.registe(name, password, phone, gender, birthday, email, callback);
}

module.exports=farmer;
// exports.farmer = farmer;
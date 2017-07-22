var user = {};
var mongoDb = require('../../../db/mongo');
user.registe = function(name, password, phone, gender, birthday, email='', callback) {
    var now = new Date().getTime();
    var user_info = {
        'user_name':name,
        'password':password,
        'gender' : gender,
        'birthday' : birthday,
        'phone' : phone,
        'email' : email,
        'create_time' : now,
        'update_info' : {
            'time' : now,
            'info' : '注册'
        }
    };
    mongoDb.save('user_farmer_data', user_info, callback);
}


module.exports = user;
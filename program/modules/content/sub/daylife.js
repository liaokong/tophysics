var mongoDb = require('../../../db/mongo');
var daylife = {};
daylife.add = function(user_id, content, title, tag, callback)
{
    now = Date.now();
    var life =  {
        user_id : user_id,
        title : title,
        content : content,
        tag : tag,
        create_time : now,
        update_time : now
    };
    mongoDb.save('life_time_data', life, callback);
}


daylife.list = function(user_id, callback)
{
    var conditions = {
        'user_id' : user_id
    };
    var option = {
        sort:{'create_time': -1}
    };
    mongoDb.where('life_time_data', conditions, option, callback)
}
module.exports = daylife;
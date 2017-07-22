var menu = {}
var mongoDb = require('../../db/mongo');
menu.list = function(callback) {
    var conditon = {};
    var operation = '';
    mongoDb.find('home_menu_data', {}, {}, callback);
}

menu.add = function(callback) {
    var menus = {
            "title" : "about",
            "name" : "about",
            "url" : "/about",
            "status" : 1,
            "submenu" : new Array()
        }
        mongoDb.save('home_menu_data', menus, callback);
}

menu.delete = function(id, callback) {
    var conditon = {
        "_id" : id
    }
    mongoDb.remove('home_menu_data', conditon, callback);
}

module.exports = menu;
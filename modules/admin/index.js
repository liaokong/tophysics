var admin = {};
var mongoDb = require('../../db/mongo');
// var user  = require('./sub/menu');

admin.menuList = function(callback) {
    var conditon = {};
    var operation = '';
    mongoDb.find('home_menu_data', {}, {}, callback);
}

admin.menuAdd = function(title, name, url, callback) {
    var menus = {
              "title" : title,
              "name" : name,
              "url" : url,
              "status" : 1,
              "submenu" : new Array()
          }
    mongoDb.save('home_menu_data', menus, callback);
}

admin.menuDel = function(id, callback) {
  mongoDb.remove('home_menu_data', {'_id':id}, callback);
}

module.exports = admin;

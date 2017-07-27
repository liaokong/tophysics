var admin = require('../admin/index');
var apibase = require('../tools/apibase');

module.exports = function(app) {
    app.get('/api/admin/menu/list', function(req, res) {
        console.log("请求了");
        admin.menuList(function(err, resu) {
            if (err) {
                res.json(apibase.success());
                return;
            } else {
                res.json(apibase.success(resu));
                return;
            }
        })
    });

    app.get('/api/admin/menu/add', function(req, res) {
        admin.menuAdd(function(err, resu) {
            if (err) {
                res.json(apibase.error(801, '添加失败'));
                return;
            } else {
                res.json(apibase.success(resu));
                return;
            }
        })
    });

    app.post('/api/admin/menu/del', function(req, res) {
        var id = req.body.id;
        admin.menuDel(id, function(err, resu) {
            if (err) {
                res.json(apibase.error(801, '删除错误'));
                return;
            } else {
                res.json(apibase.success(resu));
                return;
            }
        })
    })
}
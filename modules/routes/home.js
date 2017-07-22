var menu = require('../menu/index');
var apibase = require('../tools/apibase');

module.exports = function(app) {
    app.get('/api/menu/list', function(req, res) {
        console.log("请求了");
        menu.list(function(err, resu) {
            if (err) {
                res.json(apibase.success());
                return;
            } else {
                res.json(apibase.success(resu));
                return;
            }
        })
    });

    app.get('/api/menu/add', function(req, res) {
        menu.add(function(err, resu) {
            if (err) {
                res.json(apibase.error(801, '添加失败'));
                return;
            } else {
                res.json(apibase.success(resu));
                return;
            }
        })
    });

    app.get('/api/menu/delete', function(req, res) {
        var id = req.query.id;
        menu.delete(id, function(err, resu) {
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
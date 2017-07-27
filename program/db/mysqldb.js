var mysql = require('mysql');

var username = "root";
var password = "liaojun";
var db_host  = '120.27.124.245';
var db_port  = 3306;
var db_name  = '5jiafarm';


var option = {
    host: db_host,
    port: db_port,
    user: username,
    password: password,
    database: db_name,
};

function _exec(sqls, values, after) {
    var client = mysql.createConnection(option);

    client.connect(function(err){
        if (err) {
            console.log(err);
            return;
        }
        client.query(sqls || '', values || [], function(err, r){
            after(err,r);
        });
        client.end();
    });
    client.on('error', function(err) {
        if (err.errno != 'ECONNRESET') {
            console.log("ok conntect");
            after("err01", false);
            throw err;
        } else {
            after('err02', false);
        }
    })
}

exports.exec = _exec;
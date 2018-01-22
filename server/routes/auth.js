'use strict';


var sql = require('mssql'); 
var config = require('../conf/dbconfig');

var auth = {
    login: function(req,res){
        var username = req.body.username || '';
        var password = req.body.password || '';

        if (username == '' || password ==''){
            res.status(401);

            res.json({
                "status" : 401,
                "message" : "Empty Credentials"
            });

            return;
        }
        // Fire a query to your DB and check if the credentials are valid
       checkLogin(username,password,function(err, data){
            if (typeof err !== "undefined" && err !== null) {
                res.status(500).send({
                error: err
                });
                return;
            }
          
        if ((JSON.stringify(data)=== '[[]]')){
            res.status(401);
            res.json({
                "status" : 401,
                "message" : "Invalid Username or Password"
            });
            return;
        }else {
             res.json(data);
            }    
        });             
    },
}
// private method
function checkLogin(username,password,callback){
        var connection = new sql.connect(config.ftsdb, function(err){
            if (typeof err !== "undefined" && err !== null) {
                    callback( err );
                return
            }
            var sqlRequest = new sql.Request(connection);
            sqlRequest.input('LOGINNAME',sql.VarChar(50),username);
            sqlRequest.input('PASSWORD',sql.VarChar(50),password);
            sqlRequest.execute('CheckUserLogin',function(err,sqlRecordset){

                callback(err,sqlRecordset);
            
            });
        });
    }

module.exports = auth;
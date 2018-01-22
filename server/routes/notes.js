'use strict';

var sql = require('mssql'); 
var config = require('../conf/dbconfig');

var notes = {
    
    usertodolist: function(req,res){
        var username = req.body.username || '';
        var dueDateBy = req.body.dueDateBy || '';
        var dueDateFrom = req.body.dueDateFrom || '';
        var dueDateTo = req.body.dueDateTo || '';
        if (username == '' || dueDateBy == '') {
            res.status(401);
            res.json({
                "status" : 401,
                "message" : "No input specified"
            });
            return;
        }
        getTodoList(username,dueDateBy,dueDateFrom,dueDateTo,function(err,data){
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
                        "message" : "No records found.0"
                    });
                return;
            }else {
             res.json(data);
            }    
        });
        
    },
    todobyfilmid: function(req,res){
        var filmid = req.body.filmid || '';

        if (filmid == '') {
            res.status(401);
            res.json({
                "status" : 401,
                "message" : "No input specified"
            });
            return;
        }
        GetTodobyFilmid(,function(err,data){
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
                    "message" : "No records found.0"
                });
                return;
            }else {
                res.json(data);
            }
        });

    },

}
function getTodoList(username,dueDateBy,dueDateFrom,dueDateTo,callback){
    var connection = new sql.connect(config.ftsdb, function(err){
            if (typeof err !== "undefined" && err !== null) {
                    callback( err );
                return
            }
            var sqlRequest = new sql.Request(connection);
            sqlRequest.input('strDueDateBy',sql.VarChar(20),dueDateBy);
            sqlRequest.input('strScheduleTo',sql.VarChar(20),username);
            sqlRequest.input('strDueDateFrom',sql.VarChar(10),dueDateFrom);
            sqlRequest.input('strDueDateTo',sql.VarChar(10),dueDateTo);
            sqlRequest.execute('GetToDoList',function(err,sqlRecordset){
                    callback(err,sqlRecordset);
            });
        });
 
}
module.exports = notes;
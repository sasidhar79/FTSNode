// db.js
var mssql = require("mssql");
var config = require('./dbconfig');

var connection = mssql.connect(config.ftsdb, function (err) {
    if (err)
        throw err;
});

module.exports = mssql;

'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({
    extended: true

}));
app.use(bodyParser.json());


// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed

//app.all('/api/v1/*', [require('./app/validateRequest')]);
 
app.use('/', routes);
 
// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
  next(err);
  //  console.dir('route not found');
});
 
// Start the server
app.set('port', process.env.PORT || 4000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
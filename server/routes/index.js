var express = require('express');
    var app = express();
var router = express.Router();
 
var auth = require('./auth.js');
var notes = require('./notes.js');
//var users = require('./users.js');
//var filmtitle = require('./filmtitle.js');
//var audits = require('./audits.js');
var reports = require('./reports.js');
//var TVdata = require('./TVdata.js');
//var prodtypes = require('./prodtypes.js');
//var pension = require('./pension.js');
//var musicians = require('./musicians.js');
//var letters = require('./letters.js');
//var doctypes = require('./doctypes.js');
//var auditgroup = require('./auditgroup.js');
//var closedreasons = require('./closedreasons.js');
//var ctrl2 = require('./ctrl2.js');
//var todotypes = require('./todotypes.js');
//var employers = require('./employers.js');*/


router.post('/login', auth.login);

router.post('/notes/usertodolist', notes.usertodolist);
router.post('/reports', reports.usertodolist);


module.exports = router;
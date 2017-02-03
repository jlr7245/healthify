var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');


/* GET users listing. */

router.get('/', authHelpers.loginRequired, (req,res,next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'user',
    currentRoute: 'user'
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;

//healthify

const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const dashRenders = require('../dash/dash-render');


/* GET users listing. */

router.get('/', authHelpers.loginRequired, dashRenders.renderFoods, (req,res,next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    foods: res.locals.foods,
    title: 'user',
    currentRoute: 'user'
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;

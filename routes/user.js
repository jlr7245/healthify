//healthify

const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const dashRenders = require('../dash/dash-render');
const moment = require('moment');



/* GET users listing. */

router.get('/', authHelpers.loginRequired, dashRenders.renderFoods, dashRenders.renderMeals, (req,res,next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    foods: res.locals.foods,
    meals: res.locals.meals,
    title: 'user',
    currentRoute: 'user',
    moment: moment
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;

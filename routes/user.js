//healthify

const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const dashRenders = require('../dash/dash-render');
const moment = require('moment-timezone');
var models = require('../db/models/index');


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

router.patch('/:id', (req,res,next) => {
  models.User.update( req.body, { where: { id: req.params.id } });
});


module.exports = router;

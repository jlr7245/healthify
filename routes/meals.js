var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');
const dashHelpers = require('../dash/dash-render');



/* route to the meals form */
router.get('/', authHelpers.loginRequired, (req,res,next) => {
  res.render('meals/meals', {title: 'add meals', currentRoute: 'addmeal', user: req.user});
});

/* posting into the database */

router.post('/:id', dashHelpers.getFoodInfo, dashHelpers.postMeal, (req, res, next) => {
  res.redirect('/user');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');


/* route to the meals form */
router.get('/', authHelpers.loginRequired, (req,res,next) => {
  res.render('meals/meals', {title: 'add meals', currentRoute: 'addmeal', user: req.user});
});

/* posting into the database */

router.post('/:id', (req, res, next) => {
  models.UserMeals.create({
    ingredients: req.body.name,
    comments: req.body.comments,
    whichMeal: req.body.whichmeal,
    belongsTo: req.params.id
  });
  res.redirect('/user');
});

module.exports = router;

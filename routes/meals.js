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

router.post('/:id', dashHelpers.getFoodInfo, dashHelpers.createMealData, (req, res, next) => {
  models.UserMeals.create(res.locals.theMeal);
  res.redirect('/user');
});

/* deleting a meal */
router.delete('/delete/:id', (req,res,next) => {
  models.UserMeals.destroy({
    where: { id: req.params.id }
  }).then((meal) => res.redirect('/user'));
});

/* editing a meal */
router.get('/:id', authHelpers.loginRequired, dashHelpers.getMeal, (req,res,next) => {
  res.render('meals/edit', {title: 'edit meal', currentRoute: 'meals', meal: res.locals.mealEdited, user:req.user});
});

router.patch('/:id/:mealid', dashHelpers.getFoodInfo, dashHelpers.createMealData, (req,res,next) => {
  models.UserMeals.update(res.locals.theMeal, { where: { id: req.params.mealid } });
  res.redirect('/user');
});


module.exports = router;

var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');
const dashHelpers = require('../dash/dash-render');



// food intake form
router.get('/', authHelpers.loginRequired, (req,res,next) => {
 res.render('auth/foodform', {title: 'add foods', currentRoute: 'registration', user: req.user});
});

//Posts data from input form to database
router.post('/:id', dashHelpers.getFoodInfo, dashHelpers.postFoodsIntoDatabase, function(req, res, next) {
    res.redirect('/user');
});

//Archives foods

router.patch('/archive/:id', (req,res,next) => {
  models.Foods.update({
    updated: true
  }, { where: { id: req.params.id } } );
});

//route to specify what happens on press of delete submit button
router.delete('/:id', function(req, res, next) {
  models.Foods.destroy({
    where: { id: req.params.id }
  });
});


//routes user to full food profile info on click of food Name link on main page
router.get('/:id/:userid', function(req, res, next) {
  models.Foods.findById(req.params.id).then(function(food) {
    res.render('foods/show', { food: food, title: food.name, currentRoute: 'showfood'});
  });
});

//routes to edit view with input fields prepopulated with previously inputted information
router.get('/:id/:userid/edit', function(req, res, next) {
  models.Foods.findById(req.params.id).then(function(food) {
    res.render('foods/edit', { food: food, currentRoute: 'editfood'});
  });
});





module.exports = router;

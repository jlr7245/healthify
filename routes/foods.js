var express = require('express');
var router = express.Router();
var models = require('../db/models/index');



// Add a new food item
router.get('/new', function(req, res, next) {
  res.render('foods/new', { title: 'new food'});
});

//fetches all foods entered, from database 
router.get('/', function(req, res, next) {
  models.Foods.findAll({}).then(function(foods) {
    res.render('foods/index', {
      title: 'foods',
      foods: foods,
    });
  });
});

//Posts data from input form to database
router.post('/', function(req, res, next) {
  models.Foods.create({
    name: req.body.foodName,
  }).then(function() {
    res.redirect('/foods')
  });
});

//route to specify what happens on press of delete submit button
router.delete('/:id', function(req, res, next) {
  models.food.destroy({
    where: { id: req.params.id }
  }).then(function(food) {
    res.redirect('/foods');
  });
});


//routes user to full food profile info on click of food Name link on main page
router.get('/:id', function(req, res, next) {
  models.food.findById(req.params.id).then(function(food) {
    res.render('foods/show', { food: food, title: food.name});
  });
});

//routes to edit view with input fields prepopulated with previously inputted information
router.get('/:id/edit', function(req, res, next) {
  models.food.findById(req.params.id).then(function(food) {
    res.render('foods/edit', { food: food});
  });
});

//this function handles what happens on submit of editing food information
router.put('/:id', function(req, res, next) {
  models.food.update({
  name:req.body.foodName
  }, { where: { id: req.params.id } }).then(function() {
    res.redirect('/foods/');
  });
});


module.exports = router;

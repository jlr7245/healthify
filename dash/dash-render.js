const models = require('../db/models/index'); // importing the model
const apiCall = require('../keys/nutritionix'); // importing the API call settings

function renderFoods(req,res,next) {
  models.sequelize.query('SELECT "Foods".* FROM "Foods" JOIN "Users" ON "Users"."id" = "Foods"."belongsTo" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((foods) => {
    res.locals.foods = foods; // setting res.locals object to access in the response
    return next(); // next function
  });
}

function renderMeals(req,res,next) {
  models.sequelize.query('SELECT * FROM "Meals" JOIN "Users" ON "Users"."id" = "Meals"."belongsTo" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((foods) => {
    res.locals.meals = meals; // setting res.locals object to access in the response
    return next(); // next function
  });
}

function getFoodInfo(req,res,next) {
  apiCall.nutriAXIOS.post('/', {
    query: `${req.body.foodName}`,
    timezone: 'US/Eastern'
  }).then((theResult) => {
    console.log(theResult.data);
    res.locals.foodData = theResult.data.foods;
    return next();
  }).catch((err) => console.log(err));
}

function postFoodsIntoDatabase(req,res,next) {
  res.locals.foodData.forEach((food) => {
    models.Foods.create({
      name: food.food_name,
      calories: food.nf_calories,
      protein: food.nf_protein,
      carbohydrates: food.nf_total_carbohydrate,
      totalFat: food.nf_total_fat,
      sodium: food.nf_sodium,
      imageURL: food.photo.highres,
      belongsTo: req.user.dataValues.id
    });
  });
  return next();
}

module.exports = {
  renderFoods,
  getFoodInfo,
  postFoodsIntoDatabase
};

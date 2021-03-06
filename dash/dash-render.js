const models = require('../db/models/index'); // importing the model
const apiCall = require('../keys/nutritionix'); // importing the API call settings

function renderFoods(req,res,next) {
  models.sequelize.query('SELECT "Foods".* FROM "Foods" JOIN "Users" ON "Users"."id" = "Foods"."belongsTo" WHERE "Users"."id" = :id ORDER BY "Foods"."createdAt" DESC', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((foods) => {
    res.locals.foods = foods; // setting res.locals object to access in the response
    return next(); // next function
  });
}

function renderMeals(req,res,next) {
  models.sequelize.query('SELECT "UserMeals".* FROM "UserMeals" JOIN "Users" ON "Users"."id" = "UserMeals"."belongsTo" WHERE "Users"."id" = :id ORDER BY "UserMeals"."id" ASC', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((meals) => {
    res.locals.meals = meals; // setting res.locals object to access in the response
    return next(); // next function
  });
}

function getFoodInfo(req,res,next) {
  apiCall.nutriAXIOS.post('/', {
    query: `${req.body.foodName}`,
    timezone: 'US/Eastern'
  }).then((theResult) => {
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
      fiber: food.nf_dietary_fiber,
      imageURL: food.photo.highres,
      belongsTo: req.user.dataValues.id,
      updated: false
    });
  });
  return next();
}

function createMealData(req,res,next) {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFiber = 0;
  let totalFat = 0;
  let totalSodium = 0;
  res.locals.foodData.forEach((food) => {
    totalCalories += parseInt(food.nf_calories);
    totalProtein += parseInt(food.nf_protein);
    totalCarbs += parseInt(food.nf_total_carbohydrate);
    totalFat += parseInt(food.nf_total_fat);
    totalSodium += parseInt(food.nf_sodium);
    totalFiber += parseInt(food.nf_dietary_fiber);
  });
  res.locals.theMeal = {
    ingredients: req.body.foodName,
    comments: req.body.comments,
    whichMeal: req.body.whichmeal,
    belongsTo: req.params.id,
    totalCalories: totalCalories,
    totalProtein: totalProtein,
    totalCarbs: totalCarbs,
    totalFiber: totalFiber,
    totalSodium: totalSodium,
    totalFat: totalFat
  };
  return next();
}

function getMeal(req,res,next) {
  models.UserMeals.findById(req.params.id).then((meal) => {
    if (meal.dataValues.belongsTo !== req.user.id) {
      res.redirect('/user');
    }
    res.locals.mealEdited = meal;
    return next();
  });
}

module.exports = {
  renderFoods,
  getFoodInfo,
  postFoodsIntoDatabase,
  createMealData,
  renderMeals,
  getMeal
};


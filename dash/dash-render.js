const models = require('../db/models/index'); // importing the model

const apiCall = require('../keys/nutritionix'); // importing the API call settings

function renderFoods(req,res,next) {
  models.sequelize.query('SELECT "Foods"."name", "Foods"."id" FROM "Foods" JOIN "Users" ON "Users"."id" = "Foods"."belongsTo" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((foods) => {
    res.locals.foods = foods; // setting res.locals object to access in the response
    return next(); // next function
  });
}

function getFoodInfo(req,res,next) {
  apiCall.nutriAXIOS.post('/', {
    query: `${req.body.foodName}`,
    timezone: 'US/Eastern'
  }).then((theResult) => {
    console.log(theResult.data);
    return next();
  }).catch((err) => console.log(err));
}

module.exports = {
  renderFoods,
  getFoodInfo
};

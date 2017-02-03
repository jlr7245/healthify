const models = require('../db/models/index'); // importing the model

function renderFoods(req,res,next) {
  models.sequelize.query('SELECT "Foods"."name", "Foods"."id" FROM "Foods" JOIN "User" ON "Users"."id" = "Foods"."belongsTo" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((foods) => {
    res.locals.foods = foods; // setting res.locals object to access in the response
    return next(); // next function
  });
}

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Meals = sequelize.define('Meals', {
    id: DataTypes.INTEGER,
    belongsTo: DataTypes.INTEGER,
    ingredients: DataTypes.STRING(255),
    comments: DataTypes.TEXT,
    totalCalories: DataTypes.DECIMAL,
    totalProtein: DataTypes.DECIMAL,
    totalFat: DataTypes.DECIMAL,
    totalCarbs: DataTypes.DECIMAL,
    totalFiber: DataTypes.DECIMAL,
    totalSodium: DataTypes.DECIMAL,
    whichMeal: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Meals;
};

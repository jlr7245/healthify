'use strict';
module.exports = function(sequelize, DataTypes) {
  var Foods = sequelize.define('Foods', {
    name: DataTypes.STRING(255),
    amount: DataTypes.INTEGER,
    calories: DataTypes.DECIMAL,
    protein: DataTypes.DECIMAL,
    carbohydrates: DataTypes.DECIMAL,
    totalFat: DataTypes.DECIMAL,
    sodium: DataTypes.DECIMAL,
    calcium: DataTypes.DECIMAL,
    iron: DataTypes.DECIMAL,
    vitaminA: DataTypes.DECIMAL,
    vitaminD: DataTypes.DECIMAL,
    vitaminE: DataTypes.DECIMAL,
    vitaminC: DataTypes.DECIMAL,
    vitaminB6: DataTypes.DECIMAL,
    belongsTo: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    fiber: DataTypes.DECIMAL,
    updated: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Foods;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Social = sequelize.define('Social', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING(128),
    },
    isNew: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Social;
};

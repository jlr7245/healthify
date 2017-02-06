'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(32),
      unique: true
    },
    password: DataTypes.TEXT,
    email: DataTypes.STRING(128),
    fullName: DataTypes.STRING(200),
    isNew: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;
};

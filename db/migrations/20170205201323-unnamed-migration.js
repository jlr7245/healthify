'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  queryInterface.addColumn('Meals', 'whichMeal', {type: Sequelize.STRING(255)})

  },

  down: function (queryInterface, Sequelize) {

  }
};

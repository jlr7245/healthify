'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  queryInterface.addColumn(
    'Foods',
    'belongsTo',
    {
      type: Sequelize.INTEGER
    }
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};

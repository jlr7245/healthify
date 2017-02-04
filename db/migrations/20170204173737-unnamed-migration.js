'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  queryInterface.addColumn(
    'Foods',
    'imageURL',
    {
      type: Sequelize.STRING
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

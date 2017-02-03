'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255)
      },
      amount: {
        type: Sequelize.INTEGER
      },
      calories: {
        type: Sequelize.DECIMAL
      },
      protein: {
        type: Sequelize.DECIMAL
      },
      carbohydrates: {
        type: Sequelize.DECIMAL
      },
      totalFat: {
        type: Sequelize.DECIMAL
      },
      sodium: {
        type: Sequelize.DECIMAL
      },
      calcium: {
        type: Sequelize.DECIMAL
      },
      iron: {
        type: Sequelize.DECIMAL
      },
      vitaminA: {
        type: Sequelize.DECIMAL
      },
      vitaminD: {
        type: Sequelize.DECIMAL
      },
      vitaminE: {
        type: Sequelize.DECIMAL
      },
      vitaminC: {
        type: Sequelize.DECIMAL
      },
      vitaminB6: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Foods');
  }
};

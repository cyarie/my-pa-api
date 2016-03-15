'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        unique: true,
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      slack_id: {
        type: Sequelize.CHAR,
        unique: true
      },
      slack_username: {
        type: Sequelize.CHAR
      },
      create_dt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      modified_dt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};

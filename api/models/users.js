const sequelize = require('sequelize');

const User = sequelize.define('user', {
  user_id: {
    type: sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  slack_id: {
    type: sequelize.CHAR,
    unique: true
  },
  slack_username: {
    type: sequelize.CHAR
  }
});

module.exports = User;
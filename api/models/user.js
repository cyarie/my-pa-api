'use strict';

module.exports = function defineUser(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    slack_id: {
      type: DataTypes.CHAR,
      unique: true
    },
    slack_username: {
      type: DataTypes.CHAR
    },
    create_dt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modified_dt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
};
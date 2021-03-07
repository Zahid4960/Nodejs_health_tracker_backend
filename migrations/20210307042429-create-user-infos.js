'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('userInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        allowNull: true,
        type: DataTypes.STRING
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      gender: {
        allowNull: false,
        type: DataTypes.INTEGER,
        comment: "0 => male, 1 => female, 2 => others"
      },
      mobile: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userInfos');
  }
};
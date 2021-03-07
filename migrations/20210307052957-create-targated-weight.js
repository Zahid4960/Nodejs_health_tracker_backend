'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('targatedWeights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      targatedWeight: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      weightUnitId: {
        type: DataTypes.INTEGER,
        allowNull: false
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
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('targatedWeights');
  }
};
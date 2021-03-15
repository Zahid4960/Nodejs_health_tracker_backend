'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foodAndCalories extends Model {
  
    static associate(models) {
      
    }
  };
  foodAndCalories.init({
    foodName: {
      type: DataTypes.STRING, allowNull: false, unique: true,
      validate: { notNull: true, notEmpty: true }
    },
    amount: {
      type: DataTypes.FLOAT, allowNull: false,
      validate: { notNull: true, notEmpty: true }
    },
    calorie: {
      type: DataTypes.FLOAT, allowNull: false,
      validate: { notNull: true, notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'foodAndCalories',
  });
  return foodAndCalories;
};
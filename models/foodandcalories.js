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
    foodName: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    calorie: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'foodAndCalories',
  });
  return foodAndCalories;
};
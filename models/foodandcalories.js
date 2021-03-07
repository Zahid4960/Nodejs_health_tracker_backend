'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foodAndCalories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
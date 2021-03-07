'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calorieUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  calorieUnit.init({
    calorieUnitName: DataTypes.STRING,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'calorieUnit',
  });
  return calorieUnit;
};
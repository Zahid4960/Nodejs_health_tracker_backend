'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class targatedCalorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  targatedCalorie.init({
    targatedCalorie: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    calorieUnitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'targatedCalorie',
  });
  return targatedCalorie;
};
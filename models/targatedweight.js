'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class targatedWeight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  targatedWeight.init({
    userId: DataTypes.INTEGER,
    targatedWeight: DataTypes.FLOAT,
    weightUnitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'targatedWeight',
  });
  return targatedWeight;
};
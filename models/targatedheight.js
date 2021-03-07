'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class targatedHeight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  targatedHeight.init({
    userId: DataTypes.INTEGER,
    targatedHeight: DataTypes.FLOAT,
    heightUnitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'targatedHeight',
  });
  return targatedHeight;
};
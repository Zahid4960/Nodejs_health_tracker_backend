'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfos extends Model {
   
    static associate(models) {
      
    }
  };
  userInfos.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userInfos',
  });
  return userInfos;
};
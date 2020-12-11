'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fruits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fruits.init({
    name: DataTypes.STRING,
    fruit_type: DataTypes.STRING,
    fruit_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fruits',
  });
  return Fruits;
};
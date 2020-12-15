'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Photo.init({
    label: DataTypes.STRING,
    photo_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Photo',
    underscored: true,
  });
  return Photo;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type_transportation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type_transportation.hasMany(models.Transportation, {
        foreignKey: {
          name: "type_transportation_id",
        },
      });
    }
  }
  Type_transportation.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type_transportation",
    }
  );
  return Type_transportation;
};

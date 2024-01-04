"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transportation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transportation.hasMany(models.Transportation_movement, {
        foreignKey: {
          name: "transportation_id",
        },
      });
      Transportation.belongsTo(models.Location, {
        foreignKey: {
          name: "location_id",
        },
      });
      Transportation.belongsTo(models.Type_transportation, {
        foreignKey: {
          name: "type_transportation_id",
        },
      });
    }
  }
  Transportation.init(
    {
      name: DataTypes.STRING,
      fuel: DataTypes.INTEGER,
      service_date: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: ["busy", "ready"],
      },
      unit: {
        type: DataTypes.ENUM,
        values: ["rent", "own"],
      },
    },
    {
      sequelize,
      modelName: "Transportation",
    }
  );
  return Transportation;
};

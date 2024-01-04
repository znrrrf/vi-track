"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.hasMany(models.Transportation_movement, {
        foreignKey: {
          name: "location_finish_id",
        },
        as: "locationFinish",
      });
      Location.hasMany(models.Transportation_movement, {
        foreignKey: {
          name: "location_start_id",
        },
        as: "locationStart",
      });
      Location.hasMany(models.Transportation, {
        foreignKey: {
          name: "location_id",
        },
      });
      Location.belongsTo(models.Branch, {
        foreignKey: {
          name: "branch_id",
        },
      });
      Location.hasMany(models.User, {
        foreignKey: {
          name: "location_id",
        },
      });
    }
  }
  Location.init(
    {
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Branch.hasMany(models.Location, {
        foreignKey: {
          name: "branch_id",
        },
      });
      Branch.hasOne(models.User, {
        foreignKey: {
          name: "branch_id",
        },
      });
    }
  }
  Branch.init(
    {
      branch_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};

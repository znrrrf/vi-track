"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Transportation_movement, {
        foreignKey: {
          name: "user_id",
        },
      });

      User.belongsTo(models.Location, {
        foreignKey: {
          name: "location_id",
        },
      });
      User.belongsTo(models.Branch, {
        foreignKey: {
          name: "branch_id",
        },
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["user", "admin", "head"],
        defaultValue: "user",
      },
      pic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

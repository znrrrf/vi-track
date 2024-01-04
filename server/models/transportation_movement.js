"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transportation_movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transportation_movement.belongsTo(models.Transportation, {
        foreignKey: {
          name: "transportation_id",
        },
      });
      Transportation_movement.belongsTo(models.User, {
        foreignKey: {
          name: "user_id",
        },
      });
      Transportation_movement.belongsTo(models.Location, {
        foreignKey: {
          name: "location_finish_id",
        },
        as: "locationFinish",
      });
      Transportation_movement.belongsTo(models.Location, {
        foreignKey: {
          name: "location_start_id",
        },
        as: "locationStart",
      });
    }
  }
  Transportation_movement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "waiting for permitted",
          "permitted",
          "take off",
          "arrive",
          "done",
        ],
      },
    },
    {
      sequelize,
      modelName: "Transportation_movement",
    }
  );
  return Transportation_movement;
};

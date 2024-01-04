"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Type_transportations", [
      {
        type: "human",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "object",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Type_transportations", null, {});
  },
};

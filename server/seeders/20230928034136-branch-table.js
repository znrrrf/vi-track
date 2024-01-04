"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Branches", [
      {
        branch_name: "Central Branch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        branch_name: "Local Branch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Branches", null, {});
  },
};

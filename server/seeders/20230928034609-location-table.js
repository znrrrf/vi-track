"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Locations", [
      {
        location: "Location A",
        branch_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: "Location B",
        branch_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: "Location C",
        branch_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: "Location D",
        branch_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: "Location E",
        branch_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: "Location F",
        branch_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};

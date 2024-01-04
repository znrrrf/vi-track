"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        email: "admin@gmail.com",
        password:
          "$2b$10$R02ps8RQa3T7IyU1GGp5feX95mS3LJ3mIk9.XWpydkJ5zPx/7hSOS",
        pic: "profile1.png",
        role: "admin",
        location_id: null,
        branch_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "head1",
        email: "head1@gmail.com",
        password:
          "$2b$10$R02ps8RQa3T7IyU1GGp5feX95mS3LJ3mIk9.XWpydkJ5zPx/7hSOS",
        pic: "profile2.png",
        role: "head",
        location_id: null,
        branch_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "head2",
        email: "head2@gmail.com",
        password:
          "$2b$10$R02ps8RQa3T7IyU1GGp5feX95mS3LJ3mIk9.XWpydkJ5zPx/7hSOS",
        pic: "profile3.png",
        role: "head",
        location_id: null,
        branch_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "userLoc1",
        email: "userloc1@gmail.com",
        password:
          "$2b$10$R02ps8RQa3T7IyU1GGp5feX95mS3LJ3mIk9.XWpydkJ5zPx/7hSOS",
        pic: "profile4.png",
        role: "user",
        location_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

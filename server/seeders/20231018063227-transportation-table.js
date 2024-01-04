"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Transportation", [
      {
        name: "Vehicle 1",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 1,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 2",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 1,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 3",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 1,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 4",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 1,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 5",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 2,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 6",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 2,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 7",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 2,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 8",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 2,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 9",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 3,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 10",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 3,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 11",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 3,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 12",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 3,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 13",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 4,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 14",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 4,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 15",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 4,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 16",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 4,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 17",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 5,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 18",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 5,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 19",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 5,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 20",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 5,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 21",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 6,
        status: "ready",
        unit: "own",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 22",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 6,
        status: "ready",
        unit: "rent",
        type_transportation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 23",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 6,
        status: "ready",
        unit: "own",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vehicle 24",
        fuel: 100,
        service_date: new Date("10/28/2023"),
        location_id: 6,
        status: "ready",
        unit: "rent",
        type_transportation_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Transportations", null, {});
  },
};

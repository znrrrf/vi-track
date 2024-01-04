const { Op } = require("sequelize");
const db = require("../models");
const transportasi = db.Transportation;
const location = db.Location;
const branch = db.Branch;
const type_t = db.Type_transportation;
const user = db.User;

module.exports = {
  getAllTransport: async (req, res) => {
    try {
      const dataToken = req.dataToken;

      const idType = req.query.type;
      const search = req.query.search || "";

      const getUser = await user.findOne({
        where: {
          username: dataToken.username,
        },
      });

      if (!getUser) throw new Error("Account not found!");

      let getLocation;
      let result;
      if (getUser && getUser.location_id) {
        getLocation = await location.findOne({
          where: {
            id: getUser.location_id,
          },
          include: [branch],
        });
        result = await transportasi.findAll({
          where: {
            location_id: getUser.location_id,
            type_transportation_id: idType,
            name: {
              [Op.like]: `%${search}%`,
            },
          },
          include: [
            {
              where: {
                branch_id: getLocation.Branch.id,
              },
              model: location,
              include: [branch],
            },
            {
              model: type_t,
            },
          ],
        });
      } else {
        console.log("here2");
        getLocation = await location.findOne({
          where: {
            branch_id: getUser.branch_id,
          },
          include: [branch],
        });
        console.log({ getLocation });
        result = await transportasi.findAll({
          where: {
            location_id: getLocation.id,
            type_transportation_id: idType,
            name: {
              [Op.like]: `%${search}%`,
            },
          },
          include: [
            {
              where: {
                branch_id: getUser.branch_id,
              },
              model: location,
              include: [branch],
            },
            {
              model: type_t,
            },
          ],
        });
      }

      const dateServices = await result.map((el) => {
        const dateService = new Date(el.service_date);
        const dateNow = new Date();

        const dateRemaining = Math.abs(dateService - dateNow);
        const dateRemaingingDay = Math.ceil(
          dateRemaining / (1000 * 60 * 60 * 24)
        );
        return { id: el.id, dateRemaining: dateRemaingingDay };
      });

      res.status(200).send({
        getLocation: getLocation.Branch.id,
        dataToken,
        result,
        dateServices,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getOneTranspotation: async (req, res) => {
    try {
      const id = req.params.id;
      console.log({ getone: id });
      const result = await transportasi.findOne({
        where: {
          id: Number(id),
        },
        include: [{ model: location, include: [branch] }, type_t],
      });

      const dateService = new Date(result.service_date);
      const dateNow = new Date();

      const dateRemaining = Math.abs(dateService - dateNow);
      const dateRemaingingDay = Math.ceil(
        dateRemaining / (1000 * 60 * 60 * 24)
      );
      res.status(200).send({
        result,
        dateRemaingingDay,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};

const { Op } = require("sequelize");
const db = require("../models");
const transportasi = db.Transportation;
const movement = db.Transportation_movement;
const user = db.User;
const location = db.Location;
const branch = db.Branch;
const type = db.Type_transportation;

module.exports = {
  postMovement: async (req, res) => {
    try {
      const { finishId, startId, transportationId } = req.body;
      const dataUser = req.dataToken;
      //   console.log({ postmove: dataUser, body: req });
      const oneUser = await user.findOne({
        where: {
          username: dataUser.username,
        },
        attributes: ["id"],
      });

      const cekRequest = await movement.findOne({
        where: {
          user_id: oneUser.id,
          status: {
            [Op.or]: ["waiting for permitted", "permitted", "arrive"],
          },
        },
      });

      if (cekRequest) throw new Error("can't do this request at the time!");

      const cekVihacle = await transportasi.findOne({
        where: {
          id: transportationId,
          status: "ready",
        },
      });

      if (!cekVihacle)
        throw new Error("transporation is busy, please choose the other one!");

      const result = await movement.create({
        location_finish_id: finishId,
        location_start_id: startId,
        transportation_id: transportationId,
        user_id: oneUser.id,
        status: "waiting for permitted",
      });

      const vihacleUpdate = await transportasi.update(
        {
          status: "busy",
        },
        {
          where: {
            id: transportationId,
          },
        }
      );

      res.status(200).send({
        message: "succes",
        oneUser: oneUser.id,
        result,
        vihacleUpdate,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getAllusermovement: async (req, res) => {
    try {
      const dataUser = req.dataToken;
      const getUser = await user.findOne({
        where: {
          username: dataUser.username,
        },
      });

      if (!getUser) throw new Error("user not found!");

      const getRequsetMovement = await movement.findAll({
        where: {
          user_id: getUser.id,
          status: "done",
        },
        include: [
          { model: location, as: "locationStart", include: [branch] },
          { model: location, as: "locationFinish", include: [branch] },
          { model: transportasi, include: [type] },
          user,
        ],
      });

      if (!getRequsetMovement) throw new Error("failed to get data movement!");

      res.status(200).send({
        getRequsetMovement,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getUserMovement: async (req, res) => {
    try {
      const dataUser = req.dataToken;
      const getUser = await user.findOne({
        where: {
          username: dataUser.username,
        },
      });

      if (!getUser) throw new Error("user not found!");

      const getRequsetMovement = await movement.findOne({
        where: {
          user_id: getUser.id,
          status: {
            [Op.notIn]: ["done"],
          },
        },
        include: [
          { model: location, as: "locationStart", include: [branch] },
          { model: location, as: "locationFinish", include: [branch] },
          { model: transportasi, include: [type] },
        ],
      });

      if (!getRequsetMovement) throw new Error("failed to get data movement!");

      const dateService = new Date(
        getRequsetMovement.Transportation.service_date
      );
      const dateNow = new Date();

      const dateRemaining = Math.abs(dateService - dateNow);
      const dateRemaingingDay = Math.ceil(
        dateRemaining / (1000 * 60 * 60 * 24)
      );

      res.status(200).send({
        getRequsetMovement,
        dateRemaingingDay,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getAllMovement: async (req, res) => {
    try {
      const result = await movement.findAll({
        include: [
          { model: location, as: "locationFinish" },
          { model: location, as: "locationStart" },
          transportasi,
          user,
        ],
      });

      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  acceptMovement: async (req, res) => {
    try {
      const movemnetId = req.body.id;
      console.log({ movemnetId });

      const getMovement = await movement.findOne({
        where: {
          id: movemnetId,
        },
      });
      let result;
      console.log({ status: getMovement.status });

      if (!getMovement) throw new Error("movement not found!");
      if (getMovement.status === "waiting for permitted") {
        console.log({ accept: "here" });
        result = await movement.update(
          {
            status: "permitted",
          },
          {
            where: {
              id: movemnetId,
            },
          }
        );
      } else if (getMovement.status === "permitted") {
        result = await movement.update(
          {
            status: "take off",
          },
          {
            where: {
              id: movemnetId,
            },
          }
        );
      } else if (getMovement.status === "take off") {
        result = await movement.update(
          {
            status: "arrive",
          },
          {
            where: {
              id: movemnetId,
            },
          }
        );
      } else if (getMovement.status === "arrive") {
        result = await movement.update(
          {
            status: "done",
          },
          {
            where: {
              id: movemnetId,
            },
          }
        );
        const vihacleUpdate = await transportasi.update(
          {
            status: "ready",
          },
          {
            where: {
              id: getMovement.transportation_id,
            },
          }
        );
      }

      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};

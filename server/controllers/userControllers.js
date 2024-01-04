const db = require("../models");
const user = db.User;
const branch = db.Branch;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

module.exports = {
  userRegister: async (req, res) => {
    try {
      const { email, username, password, role } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const result = await user.create({
        email,
        username,
        password: hashPassword,
        role,
      });

      res.status(200).send({
        result,
        message: "succes created",
      });
    } catch (error) {
      res.status(400).send({
        message: "error regis",
      });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const search = req.query.search;

      const result = await user.findAll({
        where: {
          username: {
            [Op.like]: `%${search}%`,
          },
        },
      });
      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const isExist = await user.findOne({
        where: {
          email,
        },
        attributes: ["username", "role", "email", "password"],
      });

      if (!isExist) throw new Error("wrong password or email not found");

      const isValid = await bcrypt.compare(password, isExist.password);
      if (!isValid) throw new Error("wrong password or email not found");
      const payload = { username: isExist.username, role: isExist.role };
      const userToken = jwt.sign(payload, "JWT", { expiresIn: "10m" });
      console.log({ login: "login" });
      res.status(200).send({
        userToken,
        role: isExist.role,
        message: "login success",
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const username = req.params.username;

      console.log({ username });

      if (!username || username == undefined) throw new Error("no data!");

      const getUser = await user.findOne({
        where: {
          username,
        },
        include: [branch],
      });

      res.status(200).send({
        getUser,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const dataToken = req.dataToken;
      const adminPassword = req.body.adminPassword;
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const location = Number(req.body.location);

      const dataUser = await user.findOne({
        where: {
          username: dataToken.username,
        },
      });

      const isValid = await bcrypt.compare(adminPassword, dataUser.password);

      if (!isValid) throw new Error("wrong password!");

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const result = await user.create({
        username,
        password: hashPassword,
        email,
        location_id: location,
        role: "user",
        pic: "profile5.png",
      });

      res.status(200).send({
        result,
        message: "success",
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  createHead: async (req, res) => {
    try {
      const dataToken = req.dataToken;
      const adminPassword = req.body.adminPassword;
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const branch = Number(req.body.branch);
      console.log({
        dataToken,
        adminPassword,
        username,
        branch,
        password,
        email,
      });

      const dataUser = await user.findOne({
        where: {
          username: dataToken.username,
        },
      });

      const isValid = await bcrypt.compare(adminPassword, dataUser.password);

      if (!isValid) throw new Error("wrong password!");

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const result = await user.create({
        username,
        password: hashPassword,
        email,
        branch_id: branch,
        role: "head",
        pic: "profile5.png",
      });

      res.status(200).send({
        result,
        message: "success",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error.message,
      });
    }
  },
  edithUser: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const adminPassword = req.body.adminPassword;
      const position = req.body.position;

      const dataToken = req.dataToken;

      const getAdmin = await user.findOne({
        where: {
          username: dataToken.username,
        },
      });

      if (!getAdmin)
        throw new Error("Something went wrong, failed to get your data!");

      const isValid = await bcrypt.compare(adminPassword, getAdmin.password);

      if (!isValid) throw new Error("Wrong password!");

      const getUser = await user.findOne({
        where: {
          username,
        },
      });

      if (!getUser) throw new Error("User not found!");

      let result;
      if (getUser.role === "head") {
        result = await user.upadate({
          username,
          password,
          branch_id: position,
        });
      } else if (getUser.role === "user") {
        result = await user.upadate({
          username,
          password,
          location_id: position,
        });
      } else {
        throw new Error("Something went wrong, cant get User data!");
      }

      res.status(200).send({
        result,
        message: "success",
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};

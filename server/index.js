const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const bodyparser = require("body-parser");
const os = require("os");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "this is my api",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

const {
  userRouters,
  authRouters,
  transportasiRouters,
  locationRouters,
  branchRouters,
  typeRouters,
  movementRouters,
} = require("./routers");
const path = require("path");

app.use("/user", userRouters);
app.use("/auth", authRouters);
app.use("/transport", transportasiRouters);
app.use("/location", locationRouters);
app.use("/branch", branchRouters);
app.use("/type", typeRouters);
app.use("/movement", movementRouters);

app.listen(1000, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`server is running on port 1000`);
});
module.exports = app;

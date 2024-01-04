const db = require("../models");
const user = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  cekRole: async (req, res) => {
    try {
      const { userToken } = req.body;
      const data = jwt.verify(userToken, "JWT");
      const result = await user.findOne({
        where: {
          username: data.username,
        },
      });
      if (!result) throw new Error();

      res.status(200).send({
        role: result.role,
        username: result.username,
      });
    } catch (error) {
      res.status(400).send({
        message: "invalid token!",
      });
    }
  },
};

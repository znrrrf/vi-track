const db = require("../models");
const branch = db.Branch;

module.exports = {
  getAllBranch: async (req, res) => {
    try {
      const result = await branch.findAll();

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

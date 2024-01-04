const db = require("../models");
const location = db.Location;
const branch = db.Branch;

module.exports = {
  getAllLocation: async (req, res) => {
    try {
      const branchId = req.query.branchId || 0;
      console.log({ getLoc: branchId });
      let result = [];
      if (Number(branchId) === 0) {
        result = await location.findAll();
      } else {
        result = await location.findAll({
          where: {
            branch_id: branchId,
          },
        });
      }
      console.log({ results: result });
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

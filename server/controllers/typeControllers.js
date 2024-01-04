const db = require("../models");
const type_t = db.Type_transportation;

module.exports = {
  getAllType: async (req, res) => {
    try {
      const result = await type_t.findAll();

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

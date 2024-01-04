const { validateToken } = require("../lib/jwt");

module.exports = {
  tokenVerify: (req, res, next) => {
    try {
      let token = req.headers.authorization;
      console.log(token);
      if (!token) throw new Error("token not found");

      const result = validateToken(token);

      req.dataToken = result;
      console.log({ result });
      next();
    } catch (error) {
      res.status(401).send({
        error: error.message,
        data: null,
      });
    }
  },
};

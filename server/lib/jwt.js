const jwt = require("jsonwebtoken");
module.exports = {
  validateToken: (token) => {
    try {
      return jwt.verify(token, "JWT");
    } catch (error) {
      throw new Error("Sesion expired!");
    }
  },
};

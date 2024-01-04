const router = require("express").Router();
const { authControllers } = require("../controllers");

router.post("/token", authControllers.cekRole);

module.exports = router;

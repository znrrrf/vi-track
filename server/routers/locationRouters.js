const router = require("express").Router();
const { locationControllers } = require("../controllers");

router.get("/all", locationControllers.getAllLocation);

module.exports = router;

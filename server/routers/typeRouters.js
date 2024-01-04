const router = require("express").Router();
const { typeControllers } = require("../controllers");

router.get("/all", typeControllers.getAllType);
module.exports = router;

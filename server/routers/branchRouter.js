const router = require("express").Router();
const { branchControllers } = require("../controllers");

router.get("/all", branchControllers.getAllBranch);

module.exports = router;

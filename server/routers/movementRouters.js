const router = require("express").Router();
const { movementControllers } = require("../controllers");
const { tokenVerify } = require("../middleware/verifyAccount");

router.post("/init", tokenVerify, movementControllers.postMovement);
router.get("/request", tokenVerify, movementControllers.getUserMovement);
router.get("/all-request", tokenVerify, movementControllers.getAllusermovement);
router.get("/all", movementControllers.getAllMovement);
router.post("/accept", tokenVerify, movementControllers.acceptMovement);

module.exports = router;

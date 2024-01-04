const router = require("express").Router();
const { transportasiControllers } = require("../controllers");
const { tokenVerify } = require("../middleware/verifyAccount");

router.get("/all", tokenVerify, transportasiControllers.getAllTransport);
router.get(
  "/one/:id",

  transportasiControllers.getOneTranspotation
);

module.exports = router;

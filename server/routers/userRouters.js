const router = require("express").Router();
const { userControllers } = require("../controllers");
const { tokenVerify } = require("../middleware/verifyAccount");

router.post("/regis", userControllers.userRegister);
router.post("/login", userControllers.login);
router.post("/create", tokenVerify, userControllers.createUser);
router.post("/head", tokenVerify, userControllers.createHead);
router.post("/edit", tokenVerify, userControllers.edithUser);
router.get("/all", tokenVerify, userControllers.getAllUser);
router.get("/:username", userControllers.getOneUser);

module.exports = router;

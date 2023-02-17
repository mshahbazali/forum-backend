const router = require("express").Router();
const { signup, signin, user, allusers } = require("../../controller/auth");
const { validateInfo, hashPassword, checkUserName } = require("../../middlewares/auth");


router.post("/signup", validateInfo, checkUserName, hashPassword, signup);
router.post("/signin", validateInfo, checkUserName);
router.get("/user", user);
router.get("/allusers", allusers);

module.exports = router

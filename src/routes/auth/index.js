const router = require("express").Router();
const {
  signup,
  user,
  allusers,
  withGithub,
  updateProfile,
} = require("../../controller/auth");
const {
  validateInfo,
  hashPassword,
  checkUserName,
  getUserInfoFromToken,
} = require("../../middlewares/auth");

router.post("/signup", validateInfo, checkUserName, hashPassword, signup);
router.post("/signin", validateInfo, checkUserName);
router.get("/user", user);
router.get("/allusers", allusers);
router.post("/github", withGithub);
router.post("/update", getUserInfoFromToken, updateProfile);

module.exports = router;

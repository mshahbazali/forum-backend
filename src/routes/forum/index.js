const router = require("express").Router();
const { getAllForum, create, getForum, getForumAnswers } = require("../../controller/forum")


router.get("/getall", getAllForum);
router.post("/create", create);
router.get("/get", getForum);
router.get("/getanswers", getForumAnswers);

module.exports = router

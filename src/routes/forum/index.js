const router = require("express").Router();
const { getAllForum, create, getForum, getForumAnswers, createForumAnswer } = require("../../controller/forum");
const { getUserInfoFromToken } = require("../../middlewares/auth");
const { validateInfo, checkAnswerValidate } = require("../../middlewares/forum");


router.get("/getall", getAllForum);
router.post("/create", getUserInfoFromToken, validateInfo, create);
router.get("/get", getForum);
router.get("/getanswers", getForumAnswers);
router.post("/createanswer", getUserInfoFromToken, checkAnswerValidate, createForumAnswer);

module.exports = router

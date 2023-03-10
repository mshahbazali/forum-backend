const router = require("express").Router();
const {
  getAllForum,
  create,
  getForum,
  getForumAnswers,
  createForumAnswer,
  getCategoryCount,
  getCategoryByName,
  userCreatedForum,
  createDownVote,
  createUpVote,
  getUpVote,
  getDownVote,
  createComment,
  getComment,
  saveQuestion,
  getSaveQuestions,
  getCommentById,
} = require("../../controller/forum");
const { getUserInfoFromToken } = require("../../middlewares/auth");
const {
  validateInfo,
  checkAnswerValidate,
} = require("../../middlewares/forum");

router.get("/getall", getAllForum);
router.post("/create", getUserInfoFromToken, validateInfo, create);
router.get("/get", getForum);
router.get("/getanswers", getForumAnswers);
router.post(
  "/createanswer",
  getUserInfoFromToken,
  checkAnswerValidate,
  createForumAnswer
);
router.get("/getcategorycount", getCategoryCount);
router.get("/getcategorybyname", getCategoryByName);
router.get("/usercreatedforum", getUserInfoFromToken, userCreatedForum);
router.post("/createupvote", getUserInfoFromToken, createUpVote);
router.post("/createdownvote", getUserInfoFromToken, createDownVote);
router.get("/getupvote", getUpVote);
router.get("/getdownvote", getDownVote);
router.post("/createcomment", getUserInfoFromToken, createComment);
router.get("/comment", getComment);
router.get("/getcomment", getCommentById);
router.post("/savequestion", getUserInfoFromToken, saveQuestion);
router.get("/savequestion", getUserInfoFromToken, getSaveQuestions);

module.exports = router;

const { httpStatus } = require("../../config");
const {
  forumQuestionSchema,
  forumAnswerSchema,
  upVoteSchema,
  downVoteSchema,
  commentSchema,
} = require("../../models/forum");

const getAllForum = async (req, res) => {
  await forumQuestionSchema
    .find()
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.badRequest).send({ error: err }));
};
const create = async (req, res) => {
  req.body.userId = req.user._id;
  const createForum = await forumQuestionSchema(req.body);
  createForum
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "Forum Created",
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.badRequest).send({ error: err }));
};
const getForum = async (req, res) => {
  await forumQuestionSchema
    .findOne({ _id: req.headers.forumid })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};

const createForumAnswer = async (req, res) => {
  req.body.userId = req.user._id;
  const newAnswer = await forumAnswerSchema(req.body);
  newAnswer
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "Answer Created",
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};

const getForumAnswers = async (req, res) => {
  await forumAnswerSchema
    .find({ questionId: { $in: req.headers.questionid } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};

const getCategoryCount = async (req, res) => {
  await forumQuestionSchema
    .find({ category: { $in: req.headers.category } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};
const getCategoryByName = async (req, res) => {
  await forumQuestionSchema
    .find({ category: { $in: req.headers.category } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};

const userCreatedForum = async (req, res) => {
  await forumQuestionSchema
    .find({ userId: { $in: req.user._id } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};

const createUpVote = async (req, res) => {
  req.body.userId = req.user._id;
  const createUpVote = new upVoteSchema(req.body);
  await createUpVote
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "Up Vote Created",
        data: payload,
      });
    })
    .catch((err) => console.log(err));
};
const createDownVote = async (req, res) => {
  req.body.userId = req.user._id;
  const createUpVote = new downVoteSchema(req.body);
  await createUpVote
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "Down Vote Created",
        data: payload,
      });
    })
    .catch((err) => console.log(err));
};

const getUpVote = async (req, res) => {
  await upVoteSchema
    .find({ questionId: req.headers.questionid })
    .then((payload) => {
      console.log(payload);
      res.status(httpStatus.accepted).send({
        data: payload.length,
      });
    })
    .catch((err) => console.log(err));
};
const getDownVote = async (req, res) => {
  await downVoteSchema
    .find({ questionId: req.headers.questionid })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload.length,
      });
    })
    .catch((err) => console.log(err));
};

const createComment = async (req, res) => {
  req.body.userId = req.user._id;
  const createComment = new commentSchema(req.body);
  await createComment
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "Comment created",
        data: payload,
      });
    })
    .catch((err) => console.log(err));
};
const getComment = async (req, res) => {
  await commentSchema
    .find({ answerId: { $in: req.headers.answerid } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.notFound).send({ error: err }));
};
module.exports = {
  getAllForum,
  create,
  getForum,
  getForumAnswers,
  createForumAnswer,
  getCategoryCount,
  getCategoryByName,
  userCreatedForum,
  createUpVote,
  createDownVote,
  getDownVote,
  getUpVote,
  createComment,
  getComment,
};

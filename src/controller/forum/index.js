const { httpStatus } = require("../../config");
const { forumQuestionSchema, forumAnswerSchema } = require("../../models/forum");


const getAllForum = async (req, res) => {
    await forumQuestionSchema.find().then((payload) => {
        res.status(httpStatus.accepted).send({
            data: payload
        });
    }).catch((err) => res.status(httpStatus.badRequest).send({ error: err }))
};
const create = async (req, res) => {
    req.body.userId = req.user._id;
    const createForum = await forumQuestionSchema(req.body);
    createForum.save().then((payload) => {
        res.status(httpStatus.created).send({
            message: "Forum Created",
            data: payload
        });
    }).catch((err) => res.status(httpStatus.badRequest).send({ error: err }))
};
const getForum = async (req, res) => {
    await forumQuestionSchema.findOne({ _id: req.body.forumId }).then((payload) => {
        res.status(httpStatus.accepted).send({
            data: payload
        });
    }).catch((err) => res.status(httpStatus.notFound).send({ error: err }))
};

const createForumAnswer = async (req, res) => {
    req.body.userId = req.user._id
    const newAnswer = await forumAnswerSchema(req.body);
    newAnswer.save().then((payload) => {
        res.status(httpStatus.created).send({
            message: "Answer Created",
            data: payload
        });
    }).catch((err) => res.status(httpStatus.notFound).send({ error: err }));
}

const getForumAnswers = async (req, res) => {
    await forumAnswerSchema.find({ questionId: { $in: req.headers.questionid } }).then((payload) => {
        res.status(httpStatus.accepted).send({
            data: payload
        });
    }).catch((err) => res.status(httpStatus.notFound).send({ error: err }))
};


module.exports = { getAllForum, create, getForum, getForumAnswers, createForumAnswer };
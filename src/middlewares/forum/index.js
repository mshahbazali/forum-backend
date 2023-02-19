const { httpStatus } = require("../../config");

const validateInfo = async (req, res, next) => {
  if (!req.body.title || req.body.title.length < 3) {
    res.status(httpStatus.notAcceptable).send({
      message: "Enter Forum Title",
    });
  } else if (!req.body.description || req.body.description.length < 3) {
    res.status(httpStatus.notAcceptable).send({
      message: "Enter Forum Description",
    });
  } else if (!req.body.category) {
    res.status(httpStatus.notAcceptable).send({
      message: "Select Category",
    });
  } else if (!req.body.subCategory) {
    res.status(httpStatus.notAcceptable).send({
      message: "Select Sub Category",
    });
  } else {
    next();
  }
};

const checkAnswerValidate = async (req, res, next) => {
  if (!req.body.answer || req.body.answer.length < 5) {
    res.status(httpStatus.notAcceptable).send({
      message: "Enter Answer",
    });
  } else if (!req.body.questionId) {
    res.status(httpStatus.notAcceptable).send({
      message: "Something Wrong",
    });
  } else {
    next();
  }
};
module.exports = { validateInfo, checkAnswerValidate };

const { httpStatus } = require("../../config")

const validateInfo = async (req, res, next) => {
    if (!req.body.title || req.body.title < 3) {
        res.status(httpStatus.notAcceptable).send({
            message: "Enter Forum Title"
        })
    }
    else if (!req.body.discription || req.body.discription < 3) {
        res.status(httpStatus.notAcceptable).send({
            message: "Enter Forum Title"
        })
    }
    else if (!req.body.category || req.body.category < 3) {
        res.status(httpStatus.notAcceptable).send({
            message: "Enter Forum Title"
        })
    }
    else if (!req.body.subCategory || req.body.subCategory < 3) {
        res.status(httpStatus.notAcceptable).send({
            message: "Enter Forum Title"
        })
    }
    else {
        next()
    }
}


const checkAnswerValidate = async (req, res, next) => {
    if (!req.body.answer || req.body.answer.length < 5) {
        res.status(httpStatus.notAcceptable).send({
            message: "Enter Answer"
        })
    }
    else if (!req.body.questionId) {
        res.status(httpStatus.notAcceptable).send({
            message: "Something Wrong"
        })
    }
    else {
        next()
    }
}
module.exports = { validateInfo, checkAnswerValidate }
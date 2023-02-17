const jwt = require("jsonwebtoken");
const { httpStatus } = require("../../config");
const { authSchema } = require("../../models/auth")
const signup = async (req, res) => {
    req.body.password = req.hash;
    const newAuth = new authSchema(req.body);
    await newAuth.save().then((payload) => {
        res.status(httpStatus.created).send({
            message: "User created",
            data: payload
        })
    }).catch((err) => res.status(httpStatus.badRequest).send({ error: err }))
};
const signin = async (req, res) => {

};
const user = async (req, res) => {

};
const allusers = async (req, res) => {
    await authSchema.find().then((payload) => {
        res.status(httpStatus.accepted).send({
            data: payload
        })
    }).catch((err) => res.status(httpStatus.badRequest).send({ error: err }))
};


module.exports = { signup, signin, user, allusers };
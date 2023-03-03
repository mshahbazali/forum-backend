const jwt = require("jsonwebtoken");
const { httpStatus, jwtKey } = require("../../config");
const { authSchema } = require("../../models/auth");
const signup = async (req, res) => {
  req.body.password = req.hash;
  const newAuth = new authSchema(req.body);
  await newAuth
    .save()
    .then((payload) => {
      res.status(httpStatus.created).send({
        message: "User created",
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.badRequest).send({ error: err }));
};
const user = async (req, res) => {
  await jwt.verify(req.headers.token, jwtKey, async (err, payload) => {
    console.log(payload);
    if (payload?._id) {
      await authSchema.findOne({ _id: payload._id }).then((user) => {
        res.status(httpStatus.ok).send({
          data: user,
        });
      });
    }
  });
};
const allusers = async (req, res) => {
  await authSchema
    .find()
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload,
      });
    })
    .catch((err) => res.status(httpStatus.badRequest).send({ error: err }));
};

const withGithub = async (req, res) => {
  console.log("providerId ==>", req.body.providerId);
  await authSchema
    .findOne({ providerId: req.body.providerId })
    .then(async (user) => {
      if (user) {
        const token = await jwt.sign({ _id: user._id }, jwtKey);
        res.status(httpStatus.ok).send({
          message: "User Logged",
          token: token,
        });
      } else {
        const newUser = new authSchema(req.body);
        newUser.save().then(async (payload) => {
          const token = await jwt.sign({ _id: payload._id }, jwtKey);
          res.status(httpStatus.ok).send({
            message: "User Logged",
            token: token,
          });
        });
      }
    });
};

const updateProfile = async (req, res) => {
  await authSchema
    .findByIdAndUpdate({ _id: req.user._id }, req.body, {
      new: true,
    })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        message: "Profile Updated",
        data: payload,
      });
    });
};

module.exports = { signup, user, allusers, withGithub, updateProfile };

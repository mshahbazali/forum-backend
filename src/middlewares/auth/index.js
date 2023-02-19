const { httpStatus, hashSaltRounds, jwtKey } = require("../../config");
const bcrypt = require("bcrypt");
const { authSchema } = require("../../models/auth");
const jwt = require("jsonwebtoken");

const validateInfo = async (req, res, next) => {
  if (req.body.referenceId == "login") {
    if (!req.body.userName || req.body.userName.length < 6) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Valid User Name",
      });
    } else if (!req.body.password || req.body.password.length < 6) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Valid Password",
      });
    } else {
      next();
    }
  } else {
    if (!req.body.firstName || req.body.firstName.length < 3) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter First Name",
      });
    } else if (!req.body.lastName || req.body.lastName.length < 3) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Last Name",
      });
    } else if (!req.body.userName || req.body.userName.length < 6) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Valid User Name",
      });
    } else if (!req.body.password || req.body.password.length < 6) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Valid Password",
      });
    } else if (!req.body.confirmPassword || req.body.confirmPassword < 6) {
      res.status(httpStatus.notAcceptable).send({
        message: "Enter Valid Confirm Password",
      });
    } else if (req.body.password !== req.body.confirmPassword) {
      res.status(httpStatus.notAcceptable).send({
        message: "Confirm Password Not Match",
      });
    } else {
      next();
    }
  }
};

const hashPassword = async (req, res, next) => {
  if (req.body.password || req.body.password.length >= 6) {
    await bcrypt.hash(req.body.password, hashSaltRounds, function (err, hash) {
      if (!err) {
        req.hash = hash;
        next();
      } else {
        res.status(httpStatus.badRequest).send({
          error: err,
        });
      }
    });
  } else {
    res.status(httpStatus.notFound).send({
      message: "Password not found",
    });
  }
};

const checkUserName = async (req, res, next) => {
  await authSchema
    .findOne({ userName: req.body.userName })
    .then(async (payload) => {
      if (req.body.referenceId == "login") {
        if (payload) {
          const token = await jwt.sign({ _id: payload._id }, jwtKey);
          await bcrypt.compare(
            req.body.password,
            payload.password,
            function (err, result) {
              if (result) {
                res.status(httpStatus.accepted).send({
                  message: "Account Logged",
                  token: token,
                });
              } else {
                res.status(httpStatus.notAcceptable).send({
                  message: "Passwor is wrong",
                });
              }
            }
          );
        }
      } else {
        if (payload) {
          res.status(httpStatus.notAcceptable).send({
            message: "Username Taken",
          });
        } else {
          next();
        }
      }
    })
    .catch((err) => console.log(err));
};

const getUserInfoFromToken = async (req, res, next) => {
  if (req.headers.token) {
    await jwt.verify(req.headers.token, jwtKey, async (err, payload) => {
      if (payload._id) {
        await authSchema.findOne({ _id: payload._id }).then((user) => {
          req.user = user;
          next();
        });
      } else {
        res.status(httpStatus.badRequest).send({
          message: "Something Wrong",
        });
      }
    });
  } else {
    res.status(httpStatus.badRequest).send({
      message: "Token Not Found",
    });
  }
};

module.exports = {
  validateInfo,
  hashPassword,
  checkUserName,
  getUserInfoFromToken,
};

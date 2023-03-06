const { httpStatus } = require("../../../config");

const checkInfo = (req, res, next) => {
  if (req.body.categoryName) {
    next();
  } else {
    res.status(httpStatus.notAcceptable).send({
      message: "Name not found",
    });
  }
};

module.exports = { checkInfo };

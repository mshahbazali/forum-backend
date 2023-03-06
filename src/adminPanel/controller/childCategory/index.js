const { httpStatus } = require("../../../config");
const { childCategorySchema } = require("../../models/childCategory");

const addCategory = async (req, res) => {
  console.log(req.body);
  const newCategory = new childCategorySchema(req.body);
  await newCategory.save().then((payload) => {
    // console.log(payload);
  });
};

const updateCategory = async (req, res) => {
  await childCategorySchema
    .findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true })
    .then((payload) => {
      console.log(payload);
    });
};

const deleteCategory = async (req, res) => {
  await childCategorySchema
    .findByIdAndDelete({ _id: req.body._id }, req.body, { new: true })
    .then((payload) => {
      console.log(payload);
    });
};

const allCategories = async (req, res) => {
  await childCategorySchema.find().then((payload) => {
    res.status(httpStatus.accepted).send({
      data: payload,
    });
  });
};

const getCount = async (req, res) => {
  console.log(req.headers);
  await childCategorySchema
    .find({ parentCategoryName: { $in: req.headers.parentcategoryname } })
    .then((payload) => {
      res.status(httpStatus.accepted).send({
        data: payload.length,
      });
    });
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  allCategories,
  getCount,
};

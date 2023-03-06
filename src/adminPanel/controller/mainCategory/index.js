const { httpStatus } = require("../../../config");
const { mainCategorySchema } = require("../../models/mainCategory");

const addCategory = async (req, res) => {
  const newCategory = new mainCategorySchema(req.body);
  await newCategory.save().then((payload) => {
    console.log(payload);
  });
};

const updateCategory = async (req, res) => {
  await mainCategorySchema
    .findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true })
    .then((payload) => {
      console.log(payload);
    });
};

const deleteCategory = async (req, res) => {
  await mainCategorySchema
    .findByIdAndDelete({ _id: req.body._id }, req.body, { new: true })
    .then((payload) => {
      console.log(payload);
    });
};

const allCategories = async (req, res) => {
  await mainCategorySchema.find().then((payload) => {
    res.status(httpStatus.accepted).send({
      data: payload,
    });
  });
};


module.exports = { addCategory, updateCategory, deleteCategory, allCategories };

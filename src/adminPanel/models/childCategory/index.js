const mongoose = require("mongoose");
const childCategorySchema = new mongoose.model(
  "childCategory",
  mongoose.Schema(
    {
      categoryName: { type: String, trim: true },
      parentCategoryName: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = { childCategorySchema };

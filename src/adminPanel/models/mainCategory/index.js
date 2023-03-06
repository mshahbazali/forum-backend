const mongoose = require("mongoose");
const mainCategorySchema = new mongoose.model(
  "mainCategory",
  mongoose.Schema(
    {
      categoryName: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = { mainCategorySchema };

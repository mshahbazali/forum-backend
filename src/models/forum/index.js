const mongoose = require("mongoose");
const forumQuestionSchema = new mongoose.model("forumQuestion", mongoose.Schema({
    title: { type: String, trim: true },
    discription: { type: String, trim: true },
    category: { type: String, trim: true },
    subCategory: { type: String, trim: true },
    userId: { type: String, trim: true }
}, {
    timestamps: true
}));
const forumAnswerSchema = new mongoose.model("forumAnswer", mongoose.Schema({
    questionId: { type: String, trim: true },
    answer: { type: String, trim: true },
    userId: { type: String, trim: true },
    subCategory: { type: String, trim: true },
}, {
    timestamps: true
}));


module.exports = { forumQuestionSchema, forumAnswerSchema }

const mongoose = require("mongoose");
const forumQuestionSchema = new mongoose.model(
  "forumQuestion",
  mongoose.Schema(
    {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
      category: { type: String, trim: true },
      subCategory: { type: String, trim: true },
      userId: { type: String, trim: true },
      tags: { type: Array, trim: true },
    },
    {
      timestamps: true,
    }
  )
);
const forumAnswerSchema = new mongoose.model(
  "forumAnswer",
  mongoose.Schema(
    {
      questionId: { type: String, trim: true },
      answer: { type: String, trim: true },
      userId: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

const upVoteSchema = new mongoose.model(
  "upVote",
  mongoose.Schema(
    {
      questionId: { type: String, trim: true },
      userId: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);
const downVoteSchema = new mongoose.model(
  "downVote",
  mongoose.Schema(
    {
      questionId: { type: String, trim: true },
      userId: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

const commentSchema = new mongoose.model(
  "comment",
  mongoose.Schema(
    {
      answerId: { type: String, trim: true },
      userId: { type: String, trim: true },
      comment: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

const saveQuestionSchema = new mongoose.model(
  "saveQuestion",
  mongoose.Schema({
    userId: { type: String, trim: true },
    questionId: { type: String, trim: true },
  })
);

module.exports = {
  forumQuestionSchema,
  forumAnswerSchema,
  upVoteSchema,
  downVoteSchema,
  commentSchema,
  saveQuestionSchema,
};

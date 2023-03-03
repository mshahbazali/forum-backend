const mongoose = require("mongoose");
const authSchema = new mongoose.model(
  "auth",
  mongoose.Schema(
    {
      firstName: { type: String, trim: true },
      lastName: { type: String, trim: true },
      userName: { type: String, trim: true },
      email: { type: String, trim: true },
      password: { type: String, trim: true },
      provider: { type: String, trim: true },
      providerId: { type: String, trim: true },
      phoneNumber: { type: String, trim: true },
      photoURL: { type: String, trim: true },
      interests: { type: String, trim: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = { authSchema };

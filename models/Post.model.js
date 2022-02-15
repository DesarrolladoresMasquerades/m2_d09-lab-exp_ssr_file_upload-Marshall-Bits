// models/Post.model.js

const { Schema, model } = require("mongoose");

const userPostSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Content can't be empty"],
    },
    creatorId: {
      type: String,
      required: [true, "Id must be provided"],
      unique: true,
    },
    picPath: {
      type: String,
      required: [true, "Url must be provided"]
    },
    picName: {
      type: String,
      default: "picture",
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("UserPost", userPostSchema);

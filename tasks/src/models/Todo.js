const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: 60,
    },
    assignee: {
      type: String,
      required: false,
      trim: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);

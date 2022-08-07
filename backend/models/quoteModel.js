const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);

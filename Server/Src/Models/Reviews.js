const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const reviewSchema = new mongoose.Schema({
  reviewee: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  reviewer: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Review", reviewSchema);

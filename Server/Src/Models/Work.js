const mongoose = require("mongoose");
const ServiceCategory = require("./ServiceCategory");

const Schema = require("mongoose").Schema;

const WorkSchema = new mongoose.Schema({
  ServiceSubCode: ServiceSubCategory,
  workerId: { type: Schema.Types.ObjectId, ref: "Worker" },
  minPrice: Number,
  maxPrice: Number,
});

module.exports = mongoose.model("Work", WorkSchema);

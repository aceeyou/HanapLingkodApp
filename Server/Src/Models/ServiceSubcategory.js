const mongoose = require("mongoose");
const ServiceCategory = require("./ServiceCategory");

const Schema = require("mongoose").Schema;

const ServiceSchema = new mongoose.Schema({
  ServiceID: ServiceCategory,
  ServiceSubCode: Number,
  ServiceSubCategory: String,
  
});

module.exports = mongoose.model("ServiceSubCategory", ServiceSchema);

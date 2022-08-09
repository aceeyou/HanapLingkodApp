const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const ServiceSchema = new mongoose.Schema({
  Servicecategory: String,
});

module.exports = mongoose.model("ServiceCategory", ServiceSchema);

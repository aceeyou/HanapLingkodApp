const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const specificServiceSchema = new mongoose.Schema({
  name: String,
  priceRange: String,
  workingHours: String,
  workerId: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Service", specificServiceSchema);

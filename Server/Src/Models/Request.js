const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const requestSchema = new mongoose.Schema(
  {
    location: String,
    schedule: String,
    time: String,
    status: String,
    serviceCategory: String,
    recuiterId: { type: Schema.Types.ObjectId, ref: "User" },
    workerId: { type: Schema.Types.ObjectId, ref: "User" },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);

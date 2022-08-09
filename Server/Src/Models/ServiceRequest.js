const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const requestPostSchema = new mongoose.Schema(
  {
    recuiterId: { type: Schema.Types.ObjectId, ref: "Recuiter" },
    workerId: { type: Schema.Types.ObjectId, ref: "Worker" },
    workId: { type: Schema.Types.ObjectId, ref: "Work" },
    serviceDate: Date,
    serviceTime: Date,
    requestStatus: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("RequestPost", requestPostSchema);

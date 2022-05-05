const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  status: String,
  OTP: String,
  confirmPayment: String,
  requestId: { type: Schema.Types.ObjectId, ref: Request },
});

module.exports = mongoose.model("Book", bookSchema);

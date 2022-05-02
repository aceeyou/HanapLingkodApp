const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  birthday: Date,
  age: Number,
  sex: String,
  address: String,
  GovId: String,
  Certificates: String,
  profilePic: String,
});

module.exports = mongoose.model("Worker", userSchema);

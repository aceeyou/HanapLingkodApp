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
  role: String,
  accountStatus: String,
  verification: Boolean,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

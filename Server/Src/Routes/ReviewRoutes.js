const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Review = require("../Models/Reviews");
const User = require("../Models/User");

router.route("/review/:reviewer/:reviewee").post(function (req, res) {
  console.log(req.params);
  const id = req.params.reviewee;
  const review = new Review({
    reviewee: id,
    content: "try",
    reviewer: req.params.reviewer,
  });
  review.save();
  User.findById(id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      docs.comments.push(review);
      docs.save();
      res.send("added success");
    }
  });
});
module.exports = router;

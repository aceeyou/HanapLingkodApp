const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Review = require("../Models/Comments");
const User = require("../Models/Worker");

router.route("/review/:reviewer/:reviewee").post(function (req, res) {
  console.log(req.params);
  const id = req.params.reviewee;
  const review = new Review({
    reviewee: id,
    stars: req.body.stars,
    content: req.body.content,
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

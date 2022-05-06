const express = require("express");
const router = express.Router();
const Book = require("../Models/Book");

router.route("/book").get(function (req, res) {
  Book.find(
    {
      $or: [{ recuiterId: req.body.user }, { workerId: req.body.user }],
    },
    function (err, foundRequest) {
      if (!err) {
        res.send(foundRequest);
      } else {
        res.send(err);
      }
    }
  ).populate("requestId");
});

router.route("/route");
module.exports = router;

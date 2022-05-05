const express = require("express");

const router = express.Router();

const Request = require("../Models/Request");

router
  .route("/request")
  .get(function (req, res) {
    Request.find({ recuiterId: req.body.user }, function (err, foundRequest) {
      if (!err) {
        res.send(foundRequest);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newRequest = new Request({
      location: req.body.location,
      schedule: req.body.schedule,
      status: "Pending",
      recuiterId: req.body.user,
      serviceId: req.body.service,
    });
    newRequest.save(function (err) {
      if (!err) {
        res.send("Success");
      } else {
        res.send(err);
      }
    });
  });

module.exports = router;

const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Service = require("../Models/SpecificService");

router
  .route("/service")
  .get(function (req, res) {
    Service.find(function (err, foundService) {
      if (!err) {
        res.send(foundService);
      } else {
        res.send(err);
      }
    }).populate("workerId");
  })
  .post(function (req, res) {
    console.log(req.body);
    const newService = new Service({
      name: req.body.name,
      priceRange: req.body.price,
      workingHours: req.body.hours,
      workerId: req.body.user,
    });
    newService.save(function (err) {
      if (!err) {
        res.send("Success");
      } else {
        res.send(err);
      }
    });
  });

module.exports = router;

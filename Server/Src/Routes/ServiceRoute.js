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
    const newService = new Service({
      name: req.body.name,
      priceRange: req.body.price,
      workingHours: req.body.hours,
      workerId: req.body.user,
    });
    newService.save(function (err) {
      if (!err) {
        res.send("Successfully created");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Service.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all files");
      } else {
        res.send(err);
      }
    });
  });

/////////////////////////////////////target specific Service//////////////////
router
  .route("/service/:id")
  .get(function (req, res) {
    Service.findOne({ _id: req.params.id }, function (err, found) {
      if (found) {
        res.send(found);
      } else {
        res.send("No such data found");
      }
    }).populate("workerId");
  })
  .put(function (req, res) {
    console.log(req.body);
    Service.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        priceRange: req.body.price,
        workingHours: req.body.hours,
      },
      function (err) {
        if (!err) {
          res.send("Edit Success");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete(function (req, res) {
    Service.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.send("Deleted Successfully ");
      } else {
        res.send(err);
      }
    });
  });

module.exports = router;

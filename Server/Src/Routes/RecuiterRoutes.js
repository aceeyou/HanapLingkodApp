const express = require("express");

const router = express.Router();

const User = require("../Models/Worker");

router.route("/recuiter").get(function (req, res) {
  User.find({ role: "recruiter" }, function (err, foundRequest) {
    if (!err) {
      res.send(foundRequest);
    } else {
      res.send(err);
    }
  });
});

/////////////////////////target specific worker/////////////////
router
  .route("/recuiter/:id")
  .get(function (req, res) {
    User.findOne({ _id: req.params.id }, function (err, found) {
      if (found) {
        res.send(found);
      } else {
        res.send("No such data found");
      }
    }).populate({ path: "comments", populate: { path: "reviewer" } });
  })
  .put(function (req, res) {
    User.updateOne(
      { _id: req.params.id },
      {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address,
        accountStatus: req.body.status,
        verification: req.body.verification,
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
    User.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.send("Deleted Successfully ");
      } else {
        res.send(err);
      }
    });
  });

module.exports = router;

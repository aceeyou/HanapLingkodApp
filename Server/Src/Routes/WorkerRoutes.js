const express = require("express");

const router = express.Router();

const User = require("../Models/User");

router.route("/worker").get(function (req, res) {
  User.find({ role: "worker" }, function (err, foundRequest) {
    if (!err) {
      res.send(foundRequest);
    } else {
      res.send(err);
    }
  });
});

/////////////////////////target specific worker/////////////////
router
  .route("/worker/:id")
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
    console.log(req);
    User.updateOne(
      { _id: req.params.id },
      {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        age: req.body.age,
        category: req.body.category,
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

/////////////////////////////////////worker list specific category/////////////////////////////////////////

router.route("/worker/category/:category").get(function (req, res) {
  User.find(
    { $and: [{ role: "worker" }, { category: req.params.category }] },
    function (err, foundRequest) {
      if (!err) {
        res.send(foundRequest);
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = router;

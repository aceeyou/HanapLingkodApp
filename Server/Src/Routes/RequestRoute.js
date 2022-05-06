const express = require("express");

const router = express.Router();

const Request = require("../Models/Request");
const Book = require("../Models/Book");

/////////////////////////////////////target services for specific user//////////////////

router
  .route("/request/:user")
  .get(function (req, res) {
    Request.find(
      {
        $or: [{ recuiterId: req.params.user }, { workerId: req.params.user }],
        $and: [{ status: "1" }],
      },
      function (err, foundRequest) {
        if (!err) {
          res.send(foundRequest);
        } else {
          res.send(err);
        }
      }
    )
      .populate("recuiterId")
      .populate("serviceId");
  })
  .post(function (req, res) {
    const newRequest = new Request({
      location: req.body.location,
      schedule: req.body.schedule,
      status: "1",
      recuiterId: req.params.user,
      workerId: req.body.workerId,
      serviceId: req.body.service,
    });

    newRequest.save(function (err) {
      if (!err) {
        res.send("Created Successfully");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Request.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted");
      } else {
        res.send(err);
      }
    });
  });

/////////////////////////////////////target specific Service//////////////////
router
  .route("/request/:user/:id")
  .get(function (req, res) {
    Request.findOne({ _id: req.params.id }, function (err, found) {
      if (found) {
        res.send(found);
      } else {
        res.send("No such data found");
      }
    })
      .populate("recuiterId")
      .populate("serviceId");
  })
  .put(function (req, res) {
    Request.updateOne(
      { _id: req.params.id },
      {
        location: req.body.location,
        schedule: req.body.schedule,
        status: req.body.status,
      },
      function (err) {
        if (!err) {
          res.send("Edit Success");
          createBook(req.params.id);
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete(function (req, res) {
    Request.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.send("Deleted Successfully ");
      } else {
        res.send(err);
      }
    });
  });

function createBook(id) {
  console.log(id);
  const newBook = new Book({
    status: "1",
    OTP: "On the way",
    confirmPayment: "done",
    requestId: id,
  });

  newBook.save(function (err) {
    if (!err) {
      console.log("Created Successfully");
    } else {
      console.log(err);
    }
  });
}

module.exports = router;

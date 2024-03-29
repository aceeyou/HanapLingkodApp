const express = require("express");

const router = express.Router();

const Request = require("../Models/RequestPost");
const Book = require("../Models/Book");

/////////////////////////////////////target services for specific user//////////////////

router
  .route("/request/:user")
  .get(function (req, res) {
    Request.find(
      {
        $or: [{ recuiterId: req.params.user }, { workerId: req.params.user }],
        $and: [{ $or: [{ status: "1" }, { status: "3" }] }],
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
      .populate("serviceId")
      .populate("workerId");
  })
  .post(function (req, res) {
    console.log(req);
    const newRequest = new Request({
      location: req.body.location,
      schedule: req.body.schedule,
      time: req.body.time,
      status: "1",
      serviceCategory: req.body.serviceCategory,
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
      .populate("serviceId")
      .populate("workerId");
  })
  .put(function (req, res) {
    Request.updateOne(
      { _id: req.params.id },
      {
        location: req.body.location,
        schedule: req.body.schedule,
        time: req.body.time,
        status: req.body.status,
      },
      function (err) {
        if (!err) {
          res.send("Edit Success");
          if (req.body.status === "2") {
            createBook(req.params.id);
          }
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

async function createBook(id) {
  const ID_USERS = await Request.findOne({ _id: id }).exec();
  console.log(ID_USERS.recuiterId);
  const OTP = Math.random().toString(36).substring(2, 7);
  const newBook = new Book({
    rId: ID_USERS.recuiterId,
    wId: ID_USERS.workerId,
    rConfirm: "1",
    wConfirm: "1",
    status: "1",
    OTP: OTP,
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

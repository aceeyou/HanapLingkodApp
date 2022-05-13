const express = require("express");
const router = express.Router();
const Book = require("../Models/Book");

router.route("/book/:user").get(function (req, res) {
  Book.find(
    {
      $or: [{ recuiterId: req.params.user }, { workerId: req.params.user }],
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

router
  .route("/book/:user/:id")
  .get(function (req, res) {
    Book.findOne({ _id: req.params.id }, function (err, found) {
      if (found) {
        res.send(found);
      } else {
        res.send("No such data found");
      }
    }).populate("requestId");
  })
  .put(function (req, res) {
    Book.updateOne(
      { _id: req.params.id },
      {
        rConfirm: req.body.rConfirm,
        wConfirm: req.body.wConfirm,
        status: req.body.status,
      },
      function (err) {
        if (!err) {
          res.send("Edit Success");
          contract_close(req.params.id);
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete(function (req, res) {
    Book.deleteOne({ _id: req.params.id }, function (err) {
      if (!err) {
        res.send("Deleted Successfully ");
      } else {
        res.send(err);
      }
    });
  });

async function contract_close(id) {
  let status = "1";
  const contract = await Book.findById({ _id: id }).exec();
  if (contract.rConfirm === "2" && contract.wConfirm === "2") {
    await Book.updateOne(
      { _id: id },
      {
        status: "ContractClose",
      }
    );
  }
}

module.exports = router;

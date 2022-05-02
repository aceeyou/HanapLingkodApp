const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

//models
const Recuiter = require("./Models/Recruiter");
const Worker = require("./Models/Worker");

const tryRoutes = require("./Routes/try");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/hanapLingkod");

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "./public/uploads");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
//upload the image
const upload = multer({ storage: storage });

app.post("/signup/worker", upload.single("image"), (req, res) => {
  const worker = new Worker({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    age: req.body.age,
    sex: req.body.sex,
    address: req.body.address,
    GovId: req.file.filename,
  });
  worker.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      res.send("Worker account created");
    }
  });
});

app.post("/signup/Recruiter", (req, res) => {
  console.log(req.body);
  const recuiter = new Recuiter({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    age: req.body.age,
    sex: req.body.sex,
    address: req.body.address,
    //GovId: req.file.filename,
  });
  recuiter.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      res.send("Recuiter account created");
    }
  });
});

app.use(tryRoutes);

app.listen(3000, () => console.log("listening on port 3000."));

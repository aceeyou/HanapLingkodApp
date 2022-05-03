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

app.post("/signup/worker", upload.single("govId"), (req, res) => {
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
    role: "worker",
  });
  worker.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      res.send("Worker account created");
    }
  });
});

app.post(
  "/signup/Recruiter",
  upload.fields([{ name: "govId" }, { name: "profilePic" }]),
  (req, res) => {
    const recuiter = new Recuiter({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      age: req.body.age,
      sex: req.body.sex,
      address: req.body.address,
      GovId: req.files["govId"][0].filename,
      profilePic: req.files["profilePic"][0].filename,
      role: "recuiter",
    });
    recuiter.save((err) => {
      if (err) {
        res.json({ message: err.message, type: "danger" });
      } else {
        res.send("Recuiter account created");
      }
    });
  }
);

app.post("/login", (req, res) => {
  Recuiter.findOne(
    {
      username: req.body.username,
      password: req.body.password,
    },
    function (err, recuiter) {
      res.send(recuiter);
    }
  );
});

app.use(tryRoutes);

app.listen(3000, () => console.log("listening on port 3000."));

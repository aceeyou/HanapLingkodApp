const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

//models
const User = require("./Models/User");

//routes
const reviewRoutes = require("./Routes/ReviewRoutes");
const requestRoutes = require("./Routes/RequestRoute");
const serviceRoutes = require("./Routes/ServiceRoute");
const workerRoutes = require("./Routes/WorkerRoutes");
const recuiterRoutes = require("./Routes/RecuiterRoutes");
const bookRoutes = require("./Routes/BookRoutes");

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
  const worker = new User({
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
    accountStatus: "Active",
    verification: false,
  });
  worker.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      res.send("Worker account created");
    }
  });
});

app.post("/signup/Recruiter", upload.single("govId"), (req, res) => {
  console.log(req.body);
  const recuiter = new User({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthday: req.body.birthday,
    age: req.body.age,
    sex: req.body.sex,
    address: req.body.address,
    GovId: req.file.filename,
    role: "recruiter",
    accountStatus: "Active",
    verification: false,
  });
  recuiter.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      res.send("Recuiter account created");
    }
  });
});

app.post("/login", (req, res) => {
  User.findOne(
    {
      username: req.body.username,
      password: req.body.password,
    },
    function (err, User) {
      res.send(User);
    }
  );
});
app.use(workerRoutes);
app.use(requestRoutes);
app.use(serviceRoutes);
app.use(reviewRoutes);
app.use(recuiterRoutes);
app.use(bookRoutes);

// app.get('/', (req, res) => {
//   res.json({success: true, message: 'Welcome to backend zone!'});
// })

app.listen(3000, () => console.log("listening on port 3000."));

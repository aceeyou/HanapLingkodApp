const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const bcrypt = require("bcrypt");
//models
const Worker = require("./Models/Worker");
const Recuiter = require("./Models/Recuiter");

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

//store photos
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

//upload multiple files
const multipleFile = upload.fields([
  { name: "govId" },
  { name: "certificate" },
]);

//middleware check if username already exist
async function ifUserExist(req, res, next) {
  //check db if the username exist and put it in variable
  let ifWorkerExist = await Worker.exists({ username: "String" });
  let ifRecuiterExist = await Recuiter.exists({ username: "String" });
  //if the username exist send a 400 error if not created the user
  if (ifWorkerExist || ifRecuiterExist) {
    res.status(400).send("Username Already exist");
  } else {
    console.log("asd");
    next();
  }
}

//login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    //check if the username exist in recuiter or worker
    let ifWorkerExist = await Worker.exists({ username: username });
    let ifRecuiterExist = await Recuiter.exists({ username: username });
    let user;
    if (ifWorkerExist) {
      user = await Worker.findOne({ username: username });
      console.log("qq");
    } else {
      user = await Recuiter.findOne({ username: username });
    }
    if (!user) {
      return res.status(400).json({ msg: "Invalid Username" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }
    
    res.send(user);

  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

//signup worker
app.post("/signup/worker", ifUserExist, multipleFile, async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const worker = new Worker({
      username: "String",
      password: "String",
      firstname: "String",
      lastname: "String",
      middlename: "String",
      birthday: 12 / 12 / 2002,
      age: 12,
      sex: "String",
      street: "String",
      purok: "String",
      barangay: "String",
      city: "String",
      province: "String",
      phoneNumber: "String",
      emailAddress: "String",
      profilePic: "String",
      GovId: "string",
      verification: false,
      accountStatus: "active",
    });
    worker.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Worker account created");
      }
    });
  } catch {
    res.status(500).send();
  }
});

//signup worker
app.post(
  "/signup/Recruiter",
  ifUserExist,
  upload.single("govId"),
  async (req, res) => {
    //check db if the username exist and put it in variable
    let ifWorkerExist = await Worker.exists({ username: "String" });
    let ifRecuiterExist = await Recuiter.exists({ username: "String" });

    //if the username exist send a 400 error if not created the user
    if (ifWorkerExist || ifRecuiterExist) {
      res.status(400).send("Username Already exist");
    } else {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("String", salt);

        const recuiter = new Recuiter({
          username: "String",
          password: hashedPassword,
          firstname: "String",
          lastname: "String",
          middlename: "String",
          birthday: 12 / 12 / 2002,
          age: 12,
          sex: "String",
          street: "String",
          purok: "String",
          barangay: "String",
          city: "String",
          province: "String",
          phoneNumber: "String",
          emailAddress: "String",
          profilePic: "String",
          GovId: "String",
          verification: false,
          accountStatus: "active",
          role: "recuiter",
        });
        recuiter.save((err) => {
          if (err) {
            res.json({ message: err.message, type: "danger" });
          } else {
            console.log();
            res.send("Recuiter account created");
          }
        });
      } catch {
        res.status(500).send();
      }
    }
  }
);

app.use(workerRoutes);
app.use(requestRoutes);
app.use(serviceRoutes);
app.use(reviewRoutes);
app.use(recuiterRoutes);
app.use(bookRoutes);

app.listen(3000, () => console.log("listening on port 3000."));

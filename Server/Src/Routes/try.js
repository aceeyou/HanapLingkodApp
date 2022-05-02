const express = require("express");

const router = express.Router();

router.get("/try", (req, res) => {
  res.send("adssd");
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Load Data Model
const Data = require("../models/data");

// @router GET api/data
//  @des   Data
// @access Public

router.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});
// @router Post api/data
//  @des   Post data
// @access Public

router.post("/", (req, res) => {
  console.log("post data", req);

  const newData = new Data({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });
  newData
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
  console.log("postin daata", newData);
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Load Data Model
const Data = require("../models/data");

// @router GET api/data
//  @des   Data
// @access Public
router.get("/", (req, res) => {
  const error = {};
  Data.find()
    .then(data => {
      console.log("response", data);
      if (!data) {
        error.noData = "No Data Found";
        return res.status(400).json(error);
      }
      res.json(data);
    })
    .catch(err => res.status(404).json(error));
});

// @router Post api/data
//  @des   Post data
// @access Public
router.post("/", (req, res) => {
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

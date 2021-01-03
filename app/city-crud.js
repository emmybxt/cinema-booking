const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //parses information from POST
const City = require("./models/citi.models");
router.get("/getCity", function (req, res) {
  City.find({}, function (err, docs) {
    res.json(docs);
  });
});

router.get("/getCity/:id", function (req, res) {
  City.find({ _id: req.params.id }, function (err, docs) {
    res.json(docs);
  });
});

router.post("/addCity", function (req, res) {
  const citi = new City({
    cityName: req.body.cities,
  });
  console.log(citi);
  citi.save(function (err, docs) {
    if (err) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });
});

router.delete("/deleteCity/:id", function (req, res) {
  City.remove({ _id: req.params.id }, function (err, docs) {
    res.json(docs);
  });
});

router.put("/updateCity/:id", function (req, res) {
  City.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, data) {
    console.log(data);
    res.json(data);
  });
});

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = router;

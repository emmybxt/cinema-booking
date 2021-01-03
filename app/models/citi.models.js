const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  cityName: String,
});

const City = mongoose.model("City", citySchema, "citi");

module.exports = City;
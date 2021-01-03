const mongoose = require("mongoose");

const showtimeSchema = mongoose.Schema({
  showTimings: String,
  theatreName: String,
});

const Showtime = mongoose.model("Showtime", showtimeSchema, "showtime");

module.exports = Showtime;

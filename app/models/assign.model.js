const mongoose = require("mongoose");

// const bookSchema = mongoose.Schema({
//   bookingDetails: [{
//    orderId: String,
//    userSeats: String }]
// });

const assignSchema = mongoose.Schema({
  cityName: String,
  theatreName: String,
  showTime: String,
  movieTitle: String,
  fromDate: String,
  toDate: String,
  moviLanguage: String,
  moviGenre: String,
  moviPoster: String,
  moviDirector: String,
  moviActors: String,
  theatreSeats: String,
  ticketPrice: String,
  remSeats: String,
});

const Assign = mongoose.model("Assign", assignSchema, "assigning");

module.exports = Assign;

const mongoose = require('mongoose');

const theatreSchema = mongoose.Schema({            // i am creating creating schema for theatre
	theatreName: String,
	theatreSeats: Number,
	ticketPrice: Number,
	cityName: String
});

const Theatre = mongoose.model('Theatre',theatreSchema,'theatre');   // i am defining Theatre model here

module.exports = Theatre;
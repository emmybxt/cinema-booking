const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  orderId: String,
  userSeats: String,
  assignId: String,
});

const Book = mongoose.model("Book", bookSchema, "booking");

module.exports = Book;

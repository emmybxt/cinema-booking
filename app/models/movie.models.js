const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  moviTitle: String,
  moviLanguage: String,
  moviGenre: String,
  moviPoster: String,
  moviDirector: String,
  moviActors: String,
});
const Movie = mongoose.model("Movie", movieSchema, "movie");

module.exports = Movie;

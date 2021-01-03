const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //parses information from POST
const Movie = require("./models/movie.models");

//Movie
router.get("/getMovie", function (req, res) {
  Movie.find({}, function (err, docs) {
    res.json(docs);
  });
});

router.get("/getMovie/:id", function (req, res) {
  console.log("REACHED GET ID FUNCTION ON SERVER");
  Movie.find({ _id: req.params.id }, function (err, docs) {
    res.json(docs);
  });
});

router.post("/addMovie", function (req, res) {
  const title = req.body.Title;
  const language = req.body.Language;
  const genre = req.body.Genre;
  const poster = req.body.Poster;
  const director = req.body.Director;
  const actors = req.body.Actors;

  const movie = new Movie({
    moviTitle: title,
    moviLanguage: language,
    moviGenre: genre,
    moviPoster: poster,
    moviDirector: director,
    moviActors: actors,
  });

  movie.save(function (err, docs) {
    if (err) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });
});

router.delete("/deleteMovie/:id", function (req, res) {
  Movie.remove({ _id: req.params.id }, function (err, docs) {
    res.json(docs);
  });
});

router.put("/updateMovie/:id", function (req, res) {
  console.log(req.body);
  Movie.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    function (err, data) {
      console.log(data);
      res.json(data);
    }
  );
});

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = router;

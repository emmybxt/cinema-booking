// modules =================================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const movies = require("./app/movie-crud");
const city = require("./app/city-crud");
const theatre = require("./app/theatre-crud");
const showtime = require("./app/showtime-crud");
const assign = require("./app/assign-crud");
const book = require("./app/bookings-crud");

// configuration ===========================================

// config files
//const db = require('./config/db');
app.use(bodyParser.json({})); // parse application/json

app.use("/movie", movies);
app.use("/city", city);
app.use("/theatre", theatre);
app.use("/showtime", showtime);
app.use("/assign", assign);
app.use("/book", book);

const mongo = require("mongodb");
const mongoose = require("mongoose");
const dbHost = "mongodb://localhost:27017/cinema";
mongoose.connect(dbHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; // set our port
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users

// routes ==================================================
require("./app/routes")(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log("Magic happens on port " + port); // shoutout to the user

module.exports = app; // expose app

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Showtime = require('./models/showtime.models')

router.get('/getTimings', function(req, res){
  Showtime.find({}, function(err,docs){
    res.json(docs);
  });
});

router.get('/getTimings/:id', function(req,res){
  Showtime.find({_id: req.params.id}, function(err,docs){
    res.json(docs);
  });
});

router.post('/addTimings', function(req, res){

  const showtime = new Showtime({
    showTimings : req.body.STiming,
    theatreName : req.body.STheatre
  });
  console.log(showtime);
  console.log("After");

  showtime.save(function(err,docs){
    if(err) throw err;
    console.log("TIMINGS SAVED SUCCESSFULLY");
    res.json(docs);
  });
});

router.delete('/deleteShowtime/:id', function(req,res){
  Showtime.remove({_id:req.params.id}, function(err,docs){
    res.json(docs);
  });
});

router.put('/updateShowtime/:id', function(req,res){
  Showtime.findOneAndUpdate({_id:req.params.id}, req.body, function(err,data){
    res.json(data);
  });
});

router.use(function(req, res, next){
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;

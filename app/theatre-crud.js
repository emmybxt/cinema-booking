const express = require('express');
const router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

const Theatre = require('./models/theatre.model')

router.get('/getTheatre', function (req, res) {
    Theatre.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/getTheatre/:id', function (req, res) {
     Theatre.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addTheatre', function(req, res){

const theatre = new Theatre({                // i am getting all the inputs into the Theatre model and i am passing the value to the theatre constiable
  theatreName : req.body.TName,
  theatreSeats: req.body.TSeats,
  ticketPrice: req.body.TPrice,
  cityName: req.body.TCity
  });
    theatre.save(function(err, docs){       // i am saving the theatre constiable by (const) theatre.save
     if ( err ) throw err;
     console.log("Theatre Saved Successfully");
    res.json(docs);
});

});

router.delete('/deleteTheatre/:id', function(req, res){
      Theatre.remove({_id:req.params.id}, function(err, docs){    // i am removing the data from Theatre model
        res.json(docs);
    });
});

router.put('/updateTheatre/:id', function(req, res){
   Theatre.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {      // i am updating the data from the theatre model by finding the required data- findOneAndUpdate
      console.log(data);
      res.json(data);
    });
});


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;

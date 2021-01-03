const express = require('express');
const router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

const Book = require('./models/bookings.model')


router.get('/getBooking', function (req, res) {
    Book.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/getBooking/:id', function (req, res) {
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);
    });
});

router.post('/addBooking', function(req, res){
  const booking = new Book({
    orderId: req.body.OId,
    userSeats: req.body.USeats,
    assignId: req.body.AId
  });

  console.log(booking);
  booking.save(function(err, docs){
    if ( err ) throw err;
    console.log("Booking Saved Successfully");
    res.json(docs);
  });
});

router.delete('/deleteBooking/:id', function(req, res){
      Book.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateBooking/:id', function(req, res){
    console.log(req.body);
    Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;

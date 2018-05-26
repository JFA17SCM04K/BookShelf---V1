var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();
var mongoose = require('mongoose');
var Book = require('./models/Book.js');
mongoose.Promise = require('bluebird');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 'mongodb://JoeldeepKaurDhamija:Joeldeep@ds141406.mlab.com:41406/goji-systems'
//'mongodb://localhost/mean-angular5'
mongoose.connect('mongodb://JoeldeepKaurDhamija:Joeldeep@ds141406.mlab.com:41406/goji-systems', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Yelp Camp Server has started");
});
module.exports = app;

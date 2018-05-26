var mongoose = require('mongoose');
var date = require('date-and-time');
var now = new Date();


var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  publisher: String,
  published_date: { type: Date},
  available: String,
  genre: String,
});

module.exports = mongoose.model('Book', BookSchema);

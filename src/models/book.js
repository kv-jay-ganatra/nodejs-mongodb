const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
});

bookSchema.index({author: 'text'});

module.exports = mongoose.model('Book', bookSchema);

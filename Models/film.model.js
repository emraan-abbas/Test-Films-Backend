let mongoose = require('mongoose');

const filmSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    release_date: { type: String, required: true },
    rating: { type: String, required: true },
    ticket_price: { type: String, required: true },
    country: { type: String, required: true },
    genre: { type: Array, required: true },
    photo: { type: String, required: true },
  }
);

module.exports = mongoose.model('films', filmSchema);


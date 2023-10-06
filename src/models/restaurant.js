const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  address: Object,
  borough: String,
  cuisine: String,
  grades: Array,
  name: String,
  restaurant_id: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

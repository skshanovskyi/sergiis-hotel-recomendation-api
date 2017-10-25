'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let hotelSchema = new Schema({
  name: String,
  description: String,
  img: String
});

module.exports = mongoose.model('hotels', hotelSchema);
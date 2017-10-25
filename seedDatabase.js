'use strict';

const config = require('./config.json');
let mongo = require('mongodb').MongoClient;
let hotelsList = require('./data/hotel.data');
let hotelsCollection;

mongo.connect(config.db.uri)
  .then(db => {
    hotelsCollection = db.collection('hotels');
    hotelsCollection.find({}, checkHotels);
  })
  .catch(err => {
    console.log(err.message);
  });

function checkHotels(err, docs) {
  if (err) {
    console.log(err);
    return process.exit();
  }
  if (docs && docs.length) {
    console.log('Database is full');
    return process.exit();
  }
  hotelsCollection.insertMany(hotelsList, insertHotels);
}

function insertHotels(err, docs) {
  if (err) {
    console.log(err.message);
  } else if (docs && docs.result.n) {
    console.log('Database is full');
  }
  process.exit();
}

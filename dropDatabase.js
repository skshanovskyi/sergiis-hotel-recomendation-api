'use strict';

const config = require('./config.json');
let mongo = require('mongodb').MongoClient;
let hotelsCollection;

mongo.connect(config.db.uri)
  .then(db => {
    hotelsCollection = db.collection('hotels');
    hotelsCollection.deleteMany({}, deleteHotels);
  })
  .catch(err => {
    console.log(err.message);
  });

function deleteHotels(err, docs) {
  if (err) {
    console.log(err.message);
  } else if (docs && docs.result.n) {
    console.log('Database is cleared');
  }
  process.exit();
}

'use strict';

let hotelsModel = require('../data/hotel.schema');

exports.getList = (quantity) => {
  return hotelsModel.count()
    .then(result => {
      let randomIndex = getRandomIndex(result - 2);
      return hotelsModel.find()
        .skip(randomIndex)
        .limit(quantity);
    });
};

function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

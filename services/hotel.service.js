'use strict';

const hotelsList = require('../data/hotel.data');

exports.getList = (quantity) => {
  let result = new Array(quantity);
  result = result.fill(undefined);
  return Promise.resolve(result.map(() => {
    return getHotelByIndex(getRandomHotelIndex());
  }));
};

function getRandomHotelIndex() {
  let max = hotelsList.length - 1;
  let min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHotelByIndex(index) {
  return hotelsList[index];
}

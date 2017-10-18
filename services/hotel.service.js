'use strict';

const hotelsList = require('../data/hotel.data');

exports.getList = () => Promise.resolve(hotelsList);

'use strict';

let hotelController = require('./controllers/hotel.controller');

exports.init = function (app) {
  app.get('/', hotelController.getList);
};

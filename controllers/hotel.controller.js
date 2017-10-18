'use strict';

let hotelService = require('../services/hotel.service');

exports.getList = (req, res) => {
  hotelService.getList()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

'use strict';

let hotelService = require('../services/hotel.service');

exports.getList = (req, res) => {
  let quantity = req.query.quantity/1;
  hotelService.getList(quantity)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

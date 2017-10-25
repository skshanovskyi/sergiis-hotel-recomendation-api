'use strict';

const config = require('./config.json');
let express = require('express');
let mongoose = require('mongoose');
let routes = require('./routes');
let app = express();
mongoose.Promise = global.Promise;

mongoose.connect(config.db.uri, config.db.opts)
  .then(() => {
    console.log('Connection to db established');
    routes.init(app);
    return app.listen(config.app.port);
  })
  .then(() => {
    console.log(`server is listening the port: ${config.app.port}`);
  });

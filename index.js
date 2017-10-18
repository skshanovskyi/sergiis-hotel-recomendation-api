'use strict';

const config = require('./config.json');
let express = require('express');
let routes = require('./routes');
let app = express();

routes.init(app);

app.listen(config.app.port, () => {
  console.log(`server is listening the port: ${config.app.port}`);
});

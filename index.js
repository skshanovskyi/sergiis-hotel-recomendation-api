let express = require('express');
let routes = require('./routes');
let app = express();

routes.init(app);

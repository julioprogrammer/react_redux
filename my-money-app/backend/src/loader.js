const service = require('./config/server');
require('./config/database');
require('./config/routes')(service);

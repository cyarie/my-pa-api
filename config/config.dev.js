'use strict';
const morgan = require('morgan');

const devConfig = {
  port: 3000,
  appName: "mypa-api-development",
  logLevel: 'debug',
  morgan: morgan('dev')
};

module.exports = devConfig;
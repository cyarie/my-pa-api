'use strict';
const morgan = require('morgan');

const prodConfig = {
  port: 3000,
  appName: "mypa-api-production",
  logLevel: 'info',
  morgan: morgan('combined')
};

module.exports = prodConfig;
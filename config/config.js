'use strict';
const winston = require('winston');
const moment = require('moment');
const devConfig = require('./config.dev');
const prodConfig = require('./config.prod');

let config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

config.logger = new winston.Logger({
  level: config.logLevel,
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      timestamp: () => {
        return moment().format();
      },
      formatter: options => {
        return `[${config.appName}] ${options.timestamp()} ${options.level.toUpperCase()} ${undefined !== options.message ? options.message : ''} ${(options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' )}`
      }
    })
  ]
});

module.exports = config;
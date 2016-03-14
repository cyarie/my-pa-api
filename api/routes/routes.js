'use strict';
const express = require('express');
const userRoutes = require('./user');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({toot: "blan"});
});

userRoutes(apiRouter);

module.exports = apiRouter;
const express = require('express');
const apiRouter = require('./api/routes/routes');
const config = require('./config/config');
const bodyParser = require('body-parser');
const logger = config.logger;
const morgan = config.morgan;
const app = express();

app.use(morgan);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));
app.use('/api', apiRouter);

app.listen(config.port, () => {
  logger.info("Starting the app...");
});
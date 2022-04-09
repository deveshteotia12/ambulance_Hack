const express = require('express');
const config = require('./config/index');

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.listen(config.port, () => {
    console.log('Server Started');
  });
};

startServer();

const express = require('express');
const config = require('./config/index');
const { Server } = require('socket.io');
const initalize = require('./socket/index');

const startServer = () => {
  const app = express();

  app.use(express.json());

  const httpServer = app.listen(config.port, () => {
    console.log('Server Started');
  });

  const io = new Server(httpServer, config.corsParms);

  io.on('connection', socket => initalize(socket, io));
};

startServer();

const { handelConnection } = require('./listen');

const initalize = (socket, io) => {
  //Socket that handels ambulance join operations
  socket.on('joinAmbulance', data => handelAmbulanceJoin(socket, io));
  //As soon as car connects it send the location data.
  socket.on('carData', data => handelCarData(data, socket, io));
};

module.exports = initalize;

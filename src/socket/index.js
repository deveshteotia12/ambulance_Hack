const { handelConnection, handelAmbulanceJoin, handelCarData, getAllCars, handelDisconnect } = require('./listen');

const initalize = (socket, io) => {
  console.log('Hi I am here');

  //Socket that handels ambulance join operations
  socket.on('joinAmbulance', data => handelAmbulanceJoin(data, socket, io));

  //As soon as car connects it send the location data.
  socket.on('carData', data => handelCarData(data, socket, io));

  socket.on('ambulanceData', data => getAllCars(data, io));

  socket.on('disconnect', () => handelDisconnect(socket, io));
};

module.exports = initalize;

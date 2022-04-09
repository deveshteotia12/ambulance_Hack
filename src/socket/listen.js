const { sendDatahandler } = require('./emit');
const database = require('../shared/database');

const handelCarData = async ({ coordinates }, socket, io) => {
  console.log(Data);
  await (await database())
    .collection('User')
    .insertOne({ userID: socket.id, location: { type: 'Point', coordinates } });
  sendDatahandler(socket, io);
};

const handelAmbulanceJoin = async (Data, socket, io) => {
  socket.join(Data.id);
};

const getAllCars = async Data => {
  const carData = await (
    await database
  ).collection
    .find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: Data.coordinates,
          },
          $maxDistance: 4,
          $minDistance: 0,
        },
      },
    })
    .toArray();
};

module.exports = { handelCarData };

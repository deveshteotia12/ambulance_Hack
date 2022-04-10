const { sendDatahandler, sendUpdated } = require('./emit');
const database = require('../shared/database');

var carSocketData = [];

const handelCarData = async ({ coordinates }, socket, io) => {
  try {
    // await (await database()).collection('User').createIndex({ location: '2dsphere' });
    if (coordinates[0] === null || coordinates[1] === null) {
      return;
    }

    console.log(coordinates);
    const databaseResponse = await (await database()).collection('User').findOne({ userID: socket.id });

    if (databaseResponse) {
      await (await database()).collection('User').findOneandUpdate(
        {
          userID: socket.id,
        },
        { $set: { location: { type: 'Point', coordinates: coordinates } } },
      );

      await db.collection('User').createIndex({ location: '2dsphere' });
    } else {
      await (await database())
        .collection('User')
        .insertOne({ userID: socket.id, location: { type: 'Point', coordinates } });
    }

    // sendDatahandler(socket, io);
    carSocketData.push([socket.id, socket]);
  } catch (error) {
    console.log(error);
  }
};

const handelAmbulanceJoin = async (Data, socket, io) => {
  socket.join(Data.id);
};

const getAllCars = async (Data, io) => {
  if (Data.coordinates[0] === null || Data.coordinates[1] === null) {
    return;
  }
  console.log('CarData');

  const carData = await (
    await database()
  )
    .collection('User')
    .find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: Data.coordinates,
          },
          $maxDistance: 500,
          $minDistance: 0,
        },
      },
    })
    .toArray();

  carData.map(e => {
    carSocketData.map(newData => {
      if (newData[0] == e.userID) {
        newData[1].join(Data.roomID);
      }
    });
  });

  sendUpdated(Data, io);
};

const handelDisconnect = async (socket, io) => {
  try {
    console.log('User Disconnected');
    await (await database()).collection('User').deleteOne({ userID: socket.id });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handelCarData, handelAmbulanceJoin, getAllCars, handelDisconnect };

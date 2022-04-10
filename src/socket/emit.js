const sendDatahandler = (soket, io) => {
  io.to(socket.id).emit('data', { data: 'This is data' });
};

const sendUpdated = (Data, io) => {
  console.log('Updated ambulance send');
  io.to(Data.roomID).emit('ambData', { Data });
};

module.exports = { sendDatahandler, sendUpdated };

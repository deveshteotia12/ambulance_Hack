const sendDatahandler = (soket, io) => {
  io.to(socket.id).emit('data', { data: 'This is data' });
};

module.exports = { sendDatahandler };

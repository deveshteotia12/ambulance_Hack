require('dotenv').config();

const config = {
  port: process.env.PORT,

  corsParms: {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  },

  mongoURI: process.env.MONGO_URl,
};

module.exports = config;

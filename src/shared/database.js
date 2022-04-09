const { MongoClient } = require('mongodb');
const config = require('../config/index');

let db;

const intializeClient = async () => {
  try {
    const client = await MongoClient.connect(config.mongoURI);
    return client.db();
  } catch (error) {
    console.log('Error in connecting to database.');
  }
};

module.exports = async () => {
  if (!db) {
    db = await intializeClient();
  }
  return db;
};

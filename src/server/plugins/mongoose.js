const mongoose = require('mongoose')
const Promise = require('bluebird')
const config = require('config');
const host = config.get('Mongo.host')
const port = config.get('Mongo.port')

const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect(`mongodb://${host}:${port}/data`, options)
mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});
mongoose.Promise = Promise

module.exports = mongoose

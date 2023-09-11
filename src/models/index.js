require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = process.env.MongoDBConnection;
db.books = require('./book.js')(mongoose);
db.logs = require('./activityLog.js')(mongoose);
module.exports = db;

const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  timestamp: Date,
  ipAddress: String,
  action: String,
  bookInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);

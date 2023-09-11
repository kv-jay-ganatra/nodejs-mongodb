const ActivityLog = require('../models/activityLog');
const Book = require('../models/book');
module.exports = {
  getLogs: async (req, res) => {
    try {
      const page = req.query.page || 1;
      let perPage = req.query.perPage || 10;
      perPage = parseInt(perPage);
      if (isNaN(perPage) || perPage <= 0) {
        perPage = 10;
      }
      const skip = (page - 1) * perPage;
      const filters = {};
      const logs = await ActivityLog.find(filters)
          .skip(skip)
          .limit(perPage)
          .sort({timestamp: -1});

      const totalLogs = await ActivityLog.countDocuments(filters);

      const logsWithBookInfo = [];

      for (const log of logs) {
        const book = await Book.findById(log.bookInfo.toString());

        logsWithBookInfo.push({
          log,
          book,
        });
      }

      res.status(200).json({
        logs: logsWithBookInfo,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(totalLogs / perPage),
        totalLogs,
        status: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal server error', status: false});
    }
  },
};

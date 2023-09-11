module.exports = {
  getHelp: (req, res) => {
    try {
      res.render('help');
    } catch (error) {
      res.status(500).json({message: 'Internal server error'});
    }
  },
};

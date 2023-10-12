const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
router.get('/api/books', bookController.index);
router.post('/api/books/add', bookController.savedb);
router.put('/api/books/:id', bookController.update);
router.delete('/api/books/:id', bookController.delete);
module.exports = router;

const express = require('express');
const bookController = require('../controllers/book');
const authMiddleware = require('../midleware/auth.middleware')
const router = express.Router();

router.get('/api/books',authMiddleware, bookController.getAllBooks) //get all books
router.get('/api/books/:id',authMiddleware, bookController.getBook ) //get one books
router.delete('/api/books/:id',authMiddleware, bookController.deleteBook ) //Delete one books
router.put('/api/books/:id' ,authMiddleware, bookController.updateBook) //update one books
router.post('/api/books',authMiddleware, bookController.addBook ) //add new books

module.exports = router

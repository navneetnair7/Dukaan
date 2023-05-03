const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/:name', categoryController.getProducts)
categoryRouter.get('/all', categoryController.getAllCategories)

module.exports = categoryRouter
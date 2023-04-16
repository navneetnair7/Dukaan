const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/:name', categoryController.getProducts)

module.exports = categoryRouter
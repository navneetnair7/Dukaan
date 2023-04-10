const express = require('express');
const cartRouter = express.Router();
const cart = require('../models/Cart')
const cartController = require('../controllers/cartController')

cartRouter.get('/:name', cartController.getItems);

module.exports = cartRouter
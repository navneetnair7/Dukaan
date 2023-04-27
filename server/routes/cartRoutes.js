const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController')

cartRouter.get('/:name', cartController.getItems);
cartRouter.post('/add', cartController.addItem);
cartRouter.delete('/:name', cartController.placeOrder)
cartRouter.get('/shopqueue/:id', cartController.getShopQueue)

module.exports = cartRouter
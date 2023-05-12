const express = require('express')
const itemRouter = express.Router()
const itemController = require('../controllers/itemController')

itemRouter.post('/subscribe/:customer', itemController.addSubscription)
itemRouter.get('/:name', itemController.showProducts)

module.exports = itemRouter
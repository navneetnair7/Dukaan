const express = require('express')
const subscriptionRouter = express.Router()
const subscriptionController = require('../controllers/subscriptionController')

subscriptionRouter.post('/:name', subscriptionController.subscribe)
subscriptionRouter.get('/cart/:name', subscriptionController.shopData)

module.exports = subscriptionRouter
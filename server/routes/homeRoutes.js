const express = require('express')
const homeRouter = express.Router()
const homeController = require('../controllers/homeController')

homeRouter.get('/categories', homeController.getCategories)

module.exports = homeRouter
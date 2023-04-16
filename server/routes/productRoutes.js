const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.get('/:name', productController.getInfo)

module.exports = productRouter
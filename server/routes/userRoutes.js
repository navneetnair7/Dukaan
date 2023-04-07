const express = require('express');
const userRouter = express.Router();
const user = require('../models/User')
const userController = require('../controllers/userController')

userRouter.post('/login', userController.getById);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter
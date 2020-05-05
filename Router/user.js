const express = require('express');
const userRoute = express.Router();

const { getUser, userHome, createUser, home, login } = require('../controller/userController');

userRoute.get('/', userHome)
userRoute.get('/home', home)
userRoute.get('/login', login)
userRoute.post('/create-user', createUser)


module.exports = userRoute;

const express = require('express');
const userRoute = express.Router();

const { getUser, userHome, home, login } = require('../controller/userController');

userRoute.get('/', userHome)
userRoute.get('/home', home)
userRoute.get('/login', login)


module.exports = userRoute;

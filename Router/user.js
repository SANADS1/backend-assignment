const express = require('express');
const userRoute = express.Router();

const { getUser, userHome } = require('../controller/userController');

userRoute.get('/', userHome)


module.exports = userRoute;

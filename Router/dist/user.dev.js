"use strict";

var express = require('express');

var userRoute = express.Router();

var _require = require('../controller/userController'),
    getUser = _require.getUser,
    userHome = _require.userHome,
    home = _require.home,
    login = _require.login;

userRoute.get('/', userHome);
userRoute.get('/home', home);
userRoute.get('/login', login);
module.exports = userRoute;
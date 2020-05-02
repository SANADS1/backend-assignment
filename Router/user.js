const express = require('express');
const userRoute = express.Router();

const { getUser, userHome, createUser, getSignIn, getHome, getProfile } = require('../controller/userController');

userRoute.get('/', userHome)
userRoute.post('/create-user', createUser)
userRoute.get('/signin', getSignIn)
userRoute.get('/home', getHome)
userRoute.get('/profile', getProfile)



module.exports = userRoute;

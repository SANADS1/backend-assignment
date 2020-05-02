const express = require('express');
const adminRoute = express.Router();
const { getAdmin, adminHome, createAdmin } = require('../controller/adminController')


adminRoute.get('/', adminHome)
adminRoute.get('/create', createAdmin)

module.exports = adminRoute;
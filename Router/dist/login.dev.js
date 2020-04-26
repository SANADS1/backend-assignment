"use strict";

var express = require('express');

var loginRoute = express.Router();
loginRoute.route('/').get(function (req, res) {
  res.render('login.pug', {
    title: 'Facebook Clone',
    profile: 'profile',
    notification: 'notification',
    search: 'search',
    index: 'index',
    home: 'home'
  });
});
module.exports = loginRoute;
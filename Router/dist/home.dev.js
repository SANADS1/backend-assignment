"use strict";

var express = require('express');

var homeRoute = express.Router();
homeRoute.route('/').get(function (req, res) {
  res.render('home.pug', {
    title: 'Facebook Clone',
    profile: 'profile',
    notification: 'notification',
    search: 'search',
    index: 'index'
  });
});
module.exports = homeRoute;
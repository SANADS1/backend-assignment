"use strict";

var express = require('express');

var homeRouter = express.Router();
homeRouter.route('/').get(function (req, res) {
  res.render('home.pug', {
    title: 'Facebook Clone',
    profile: 'profile',
    notification: 'notification',
    search: 'search',
    index: 'index'
  });
});
module.exports = homeRouter;
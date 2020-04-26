const express = require('express');

const homeRoute = express.Router();

homeRoute.route('/')
  .get((req, res) => {
    res.render(
      'home.pug',
      {
        title: 'Facebook Clone', 
        profile: 'profile',
        notification: 'notification',
        search: 'search',
        index: 'index'


      }
    );
  });
module.exports = homeRoute;













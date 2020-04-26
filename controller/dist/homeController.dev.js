"use strict";

module.exports = {
  getHome: function getHome(req, res) {
    res.render('home.pug', {
      title: 'Facebook Clone',
      profile: 'profile',
      notification: 'notification',
      search: 'search',
      index: 'index'
    });
  }
};
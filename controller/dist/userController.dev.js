"use strict";

module.exports = {
  getUser: function getUser(req, res) {
    return res.send(req.params.username);
  },
  userHome: function userHome(req, res) {
    res.render('index.pug', {
      title: 'Facebook Clone',
      home: 'home',
      greeting: 'Hello World',
      profile: 'profile',
      notification: 'notification',
      search: 'search',
      index: 'index'
    });
  },
  home: function home(req, res) {
    res.render('home.pug', {
      title: 'Facebook Clone',
      home: 'home',
      greeting: 'Hello World',
      profile: 'profile',
      notification: 'notification',
      search: 'search',
      index: 'index'
    });
  },
  login: function login(req, res) {
    res.render('login.pug', {
      title: 'Facebook Clone',
      home: 'home',
      greeting: 'Hello World',
      profile: 'profile',
      notification: 'notification',
      search: 'search',
      index: 'index'
    });
  }
};
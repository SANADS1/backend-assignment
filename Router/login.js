const express = require ('express');

const loginRoute = express.Router();

loginRoute.route('/')
  .get((req, res) => {
      res.render(
         'login.pug',
         {
            title: 'Facebook Clone', 
            profile: 'profile',
            notification: 'notification',
            search: 'search',
            index: 'index',
            home: 'home'
         }
    );

});

module.exports = loginRoute;  
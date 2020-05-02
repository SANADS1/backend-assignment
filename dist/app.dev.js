"use strict";

// //Load HTTP module
var http = require("http");

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var userRoute = require('./Router/user');

var adminRoute = require('./Router/admin'); //const  homeRoute = require('./Router/home');
//const  loginRoute = require('./Router/login');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](__dirname + '/Public'));
app.use('/bootstrap', express["static"](__dirname + '/Public/dist/css')); // parse application/json

app.use(bodyParser.json());
app.set('views', './Views');
app.set('view engine', 'pug');
app.use('/', userRoute);
app.use('/admin', adminRoute); //app.use('/home', homeRoute);
//app.use('/login', loginRoute);

var server = http.createServer(app);
module.exports = server;
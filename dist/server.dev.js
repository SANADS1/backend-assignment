"use strict";

var server = require('./app');

var port = 5500;
server.listen(port, function () {
  console.log("Server started on ".concat(port));
});
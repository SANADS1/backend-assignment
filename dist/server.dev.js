"use strict";

var server = require('./app')["default"];

var port = 5555;
server.listen(port, function () {
  console.log("Server started on ".concat(port));
});
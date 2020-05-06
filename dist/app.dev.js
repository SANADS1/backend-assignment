"use strict";

/*Load HTTP module
const http = require("http");

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
//parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
   res.json({
     "text": "plain",
     "number": 56
   });
});
app.post('/sample-post', (req, res) => {
   res.json(req.body);
});


const server = http.createServer(app)
module.exports = server*/
var fs = require('fs'); // writeFile function with filename, content and callback function


fs.writeFile('Backendskypelink.txt', 'meeting link code', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
fs.appendFile('covid191.txt', 'covid assignment', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
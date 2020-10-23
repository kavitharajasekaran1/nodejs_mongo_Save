"use strict";
let express = require('express');
let app = express();
let server = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = process.env.PORT || 8000;
var router = express.Router();
server.listen(port, () => console.log(`Active on ${port} port`));
var test= require("./testurl")
const db = require('./dao');
var path = require("path");

//  var test = require("./testurl");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})


  app.post("/testing", function (req, res) {
    // var frontend_request = req.body;
    // console.log(frontend_request,"frontend_request")
    // test
    //   .testurl(frontend_request)
    //   .then((result) => {
    //     res.send({
    //       result: result,
    //     });
    //   })
    //   .catch((err) =>
    //     res.status(err.status).json({
    //       message: err.message,
    //     })
    //   );
    const request = require('request');
request('http://www.dinamalar.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  res.send({
    statusCode:200,
    result:"success"
  })
});
  });
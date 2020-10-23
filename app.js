// // "use strict";
// // let express = require('express');
// // let app = express();
// // let server = require('http').Server(app);
// // const bodyParser = require('body-parser');
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // var port = process.env.PORT || 8080;
// // var router = express.Router();
// // server.listen(port, () => console.log(`Active on ${port} port`));

// //  var test = require("./testurl");


// //   router.post("/test", function (req, res) {
// //     var frontend_request = req.body;
// //     console.log(frontend_request,"frontend_request")
// //     test
// //       .testurl(frontend_request)
// //       .then((result) => {
// //         res.send({
// //           result: result,
// //         });
// //       })
// //       .catch((err) =>
// //         res.status(err.status).json({
// //           message: err.message,
// //         })
// //       );
// //   });

// var express = require('express')
// var http = require('http')
// var path = require('path')
// var reload = require('reload')
// var bodyParser = require('body-parser')
// var logger = require('morgan')
 
// var app = express()
 
// var publicDir = path.join(__dirname, 'public')
 
// app.set('port', process.env.PORT || 3000)
// app.use(logger('dev'))
// app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded
 
// app.get('/', function (req, res) {
//   res.sendFile(path.join(publicDir, 'index.html'))
// })

// app.get('/test',function(req,res){

//     var http = require('http');
//     var url =  'http://shapeof.com/feed.json'
//     http.get(url, (resp) => {
//         let chunks = [];
  
//         // A chunk of data has been recieved.
//         resp.on('data', (chunk) => {
//             console.log(chunk.toString())
//           chunks.push(chunk.toString());
//         });
//         console.log(chunks,"fdfsgsg")
        
        

// // var options = {
// //     host: 'http://shapeof.com/feed.json',
// //     path: '/'
// // }
// // var request = http.request(options, function (res) {
// //     var data = '';
// //     res.on('data', function (chunk) {
// //         data += chunk;
// //     });
// //     console.log(data);
//     res.send({
//         result:chunks
//     })
//     // res.on('end', function () {
//     //     console.log(data);

//     // });
// });

// })
 
// var server = http.createServer(app)
 
// // Reload code here
// reload(app).then(function (reloadReturned) {
//   // reloadReturned is documented in the returns API in the README
 
//   // Reload started, start web server
//   server.listen(app.get('port'), function () {
//     console.log('Web server listening on port ' + app.get('port'))
//   })
// }).catch(function (err) {
//   console.error('Reload could not start, could not start server/sample app', err)
// })
  
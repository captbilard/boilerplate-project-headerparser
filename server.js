// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require('os')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//Request Header Parser Microservice
app.get("/api/whoami", function(req, res){
  //get the req ip address
  let ipaddress = req.ip;
  //get the accepted languages set by the browser
  let language = req.headers["accept-language"];
  //get details about the user browser agent
  let user_agent = req.headers["user-agent"];
  // console.log(ipaddress, language, user_agent)
  res.json({
    "ipaddress":ipaddress.slice(7),
    "language":language,
    "software": user_agent
  })
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

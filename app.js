var login = require("facebook-chat-api");

var http = require("http");
var a_sync = require("async");

var config = require("./config.json");

//prevent server from sleeping
http.createServer(function (req, res) {
  console.log("ping");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("");
}).listen(process.env.PORT || 5000);

setInterval(function() {
  http.get("fb-bitcoin-bot.herokuapp.com", function(res) {
    console.log("pong");
  });
}, 300000);

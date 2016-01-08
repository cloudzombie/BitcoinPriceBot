var login = require("facebook-chat-api");
var btc = require("btcaverage");
var http = require("http");
var a_sync = require("async");
var config = require("./config.json");

var fb_api;
var average;
var message;

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

btc().then(function(priceDetails){
  average = parseFloat(priceDetails.average).toFixed(2);
  message = {body: "1 BTC = $"+average};
});

login({email: config.username, password: config.password}, function callback (err, api) {
  if(err) return console.error(err);

  fb_api = api;

  api.getFriendsList(function(err, data) {
    if(err) return console.error(err);

    for(var i = 0; i < data.length; i++) {
      var userID = data[i].userID;
      api.sendMessage(message, userID);
    }
  });
});

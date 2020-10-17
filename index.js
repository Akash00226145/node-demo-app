var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('!Hello World! Akash *** 2020 17 Oct 5:15');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});

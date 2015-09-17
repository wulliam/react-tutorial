var fs = require('fs');

var express = require('express');
var httpProxy = require('http-proxy');


var app = new express();
var proxy = new httpProxy.createServer({
  target: {
    host: '192.168.1.113',
    port: 8888
  }
});

// app.all('/blogserver/*', function (req, res) {
//   proxy.web(req, res);
// });

app.all('/*', function (req, res) {
  proxy.web(req, res);
});

app.listen(3000);

/**
 * Created by carlossouza on 4/6/15.
 */

var app     = require('express')();
var path    = require('path');
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var env     = process.env.NODE_ENV || 'development';
var basePath = '';

server.listen(3000);

if (env == 'development') {
  console.log('Node running on DEVELOPMENT mode');
  basePath = path.join(__dirname, 'views/');
} else if (env == 'production') {
  console.log('Node running on PRODUCTION mode');
  basePath = path.join(__dirname, '../public/');
}

app.get('/', function (req, res) {
  res.sendFile(basePath + 'index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
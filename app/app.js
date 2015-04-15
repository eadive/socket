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

  socket.on('message', function(message) {
    log('S --> Got message: ', message);
    socket.to(message.channel).emit('message', message.message);
  });

  socket.on('create or join', function(channel) {
    var numClients = io.sockets.clients(channel).length;
    console.log('numclients = ' + numClients);
    // First client joining...
    if (numClients == 0) {
      socket.join(channel);
      socket.emit('created', channel);
      // Second client joining...
    } else if (numClients == 1) {
      // Inform initiator...
      io.sockets.in(channel).emit('remotePeerJoining', channel);
      // Let the new peer join channel
      socket.join(channel);
      socket.to(channel).emit('broadcast: joined', 'S --> broadcast(): client ' + socket.id + ' joined channel ' + channel);
    } else {
    // max two clients
      console.log("Channel full!");
      socket.emit('full', channel);
    }
  });

  socket.on('response', function(response) {
    log('S --> Got response: ', response);
    // Just forward message to the other peer
    socket.to(response.channel).emit('response', response.message);
  });

  socket.on('Bye', function(channel) {
    // Notify other peer
    socket.to(channel).emit('Bye');
    // Close socket from server's side
    socket.disconnect();
  });

  socket.on('Ack', function() {
    console.log('Got an Ack!');
    // Close socket from server's side
    socket.disconnect();
  });

  function log() {
    var array = [">>> "];
    for (var i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
      socket.emit('log', array);
    }
  }

});
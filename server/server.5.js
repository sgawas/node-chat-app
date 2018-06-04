const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');
 const publicPath = path.join(__dirname,'../public');

const port = process.env.port || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{   // lets u register an eventlistener and listen to that event and do something when that event happen
    console.log('new user connected');

    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined',));

    socket.on('createMessage', (message,callback)=>{
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from server');
    });

    socket.on('createLocationMessage', (coords)=>{
        console.log(coords);
      //  io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude} `));
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude,coords.longitude));
    });

    socket.on('disconnect',() =>{
        console.log('user was disconnected');
    });
})     

server.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})


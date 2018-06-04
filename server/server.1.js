const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

 const publicPath = path.join(__dirname,'../public');
// console.log(publicPath);
// console.log(__dirname + '../public');

const port = process.env.port || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{   // lets u register an eventlistener and listen to that event and do something when that event happen
    console.log('new user connected');

    // socket.emit('newEmail', {
    //     from: 'suraj@email.com',
    //     text: 'how r you',
    //     createAt: 123
    // });

    // socket.on('createEmail', (newEmail)=>{
    //     console.log('createEmail', newEmail);
    // });

    socket.emit('newMessage', {
        from: 'suraj',
        text: 'can we meet',
        createAt: 123
    });

    socket.on('createMessage', (newMessage)=>{
        console.log('createMessage', newMessage);
    });

    socket.on('disconnect',() =>{
        console.log('user was disconnected');
    });
})     

server.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})
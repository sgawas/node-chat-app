const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
 const publicPath = path.join(__dirname,'../public');

const port = process.env.port || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{   // lets u register an eventlistener and listen to that event and do something when that event happen
    console.log('new user connected');

    socket.emit('newMessage',{
        from: 'Admin',
        text: 'welcome to the chat',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (message)=>{
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });

        // socket.broadcast.emit('newMessage', {  //broadcasting is emitting event to everybody except the user
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect',() =>{
        console.log('user was disconnected');
    });
})     

server.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})


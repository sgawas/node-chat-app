var socket = io(); //initiating request from client to server, to open up websocket and to keep that connection open.
socket.on('connect', function() {
    console.log('connected to server');    
    
});


socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('new message', message);
});

socket.emit('createMessage', {
    from: 'Tom',
    text: 'This worked!'
}, function(data){
    console.log('Got it. ',data);
});
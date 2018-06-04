var socket = io();
socket.on('connect', function() {
    console.log('connected to server');    
    
    // socket.emit('createEmail', { // emits an event to single connection
    //     to: 'deepu@email.com',
    //     text: 'hello'
    // });

    socket.emit('createMessage', {
        to: 'deepa',
        text: 'c u soon'
    });
});

io.emit({   // emits event to every single connection

})

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

// socket.on('newEmail', function(email){
//     console.log('New email', email);
// });

socket.on('newMessage', function(message){
    console.log('new message', message);
});
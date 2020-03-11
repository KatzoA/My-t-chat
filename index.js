const express = require('express');
const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT|| 3000);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const server = app.listen(app.get("port"), () => {
console.log('Server on port ', app.get('port'));
});

const SocketIO = require('socket.io');
const io = SocketIO.listen( server);

// Websocket
io.on('connection', (socket) => {
    console.log('new connection', socket.id);
})

 




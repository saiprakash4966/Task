const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  
  // Listen for the forwarded data event from the client
  socket.on('forward_data', (data) => {
    console.log(data); // Do something with the received data
    
    // Forward the data to the frontend
    socket.emit('data', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

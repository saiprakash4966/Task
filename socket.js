import io from 'socket.io-client';

const socket = io('http://13.232.18.39/');
socket.on('dashboard', (data) => {
  console.log(data); // Do something with the received data
});
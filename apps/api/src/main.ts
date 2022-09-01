import app from './app/app';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { io } from 'socket.io-client';
const port = process.env.port || 3333;

const httpServer = createServer(app);

const socket = new Server(httpServer, {
  cors: {
    origin: '*',
  },
  transports: ['websocket', 'polling'],
  serveClient: true,
});

socket.on('connect', (client) => {
  console.log('someone connected');

  client.on('sayHello', (data) => {
    console.log(`event: sayHello, data: ${data}`);
    client.emit('halloToYouTo', 'Hello from');
  });

  client.join('clock-room');

  client.on('disconnect', () => {
    console.log('client disconnected');
  });
});

setInterval(() => {
  socket.to('clock-room').emit('time', new Date());
}, 1000);

httpServer.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

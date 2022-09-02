import { App } from 'uWebSockets.js';

const port = process.env.port || 3334;
let time = 0;
let intervalId;
const uwsApp = App().ws('/*', {
  open: (socket) => {
    console.log({ id: socket });
    socket.subscribe('time');
    if (intervalId > 0) {
      intervalId = setInterval(
        () => ((time = time + 1), socket.send(time.toString())),
        1000
      );
    }
  },
  message: (socket, message, isBinary) => {
    console.log('message');
    // socket.send(message, isBinary, true);
    socket.publish('time', message);
  },
  close: () => {
    console.log('close connection');
    clearInterval(intervalId);
    // time = 0;
  },
});

uwsApp.listen(Number(port), () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

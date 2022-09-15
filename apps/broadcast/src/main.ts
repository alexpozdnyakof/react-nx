import { App } from 'uWebSockets.js';
import * as txModel from './app/tx-model';

const port = process.env.port || 3334;
let time = 0;
let intervalId;
const channelName = 'txs';

const app = App().ws('/*', {
  open: (socket) => {
    console.log({ id: socket });
    socket.subscribe(channelName);

    app.publish(channelName, JSON.stringify(txModel.getLatest()));

    intervalId = setInterval(
      () => (
        (time = time + 1),
        app.publish(channelName, JSON.stringify(txModel.getNew()))
      ),
      30000
    );
  },
  message: (socket, message) => {
    socket.publish('time', message);
  },
  close: () => {
    console.log('close connection');
    clearInterval(intervalId);
  },
});

app.listen(Number(port), () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

import app from './app/app';
import * as http from 'http';
import { server as WebSocketServer } from 'websocket';

const port = process.env.port || 3333;

const httpServer = http.createServer(app);

// const httpServer = app.listen(port, () => {
//   console.log('Listening at http://localhost:' + port + '/api');
// });

// httpServer.on('error', console.error);

const wsServer = new WebSocketServer({
  httpServer: httpServer,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: true,
});

function originIsAllowed(origin: unknown) {
  console.log({ origin });
  return true;
}

wsServer.on('request', function (request) {
  console.log({ request });
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + ' Connection from origin ' + request.origin + ' rejected.'
    );
    return;
  }

  const connection = request.accept('echo-protocol', request.origin);
  console.log(new Date() + ' Connection accepted.');

  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    } else if (message.type === 'binary') {
      console.log(
        'Received Binary Message of ' + message.binaryData.length + ' bytes'
      );
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on('close', function (reasonCode, description) {
    console.log(reasonCode, description);
    console.log(
      new Date() + ' Peer ' + connection.remoteAddress + ' disconnected.'
    );
  });
});

httpServer.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

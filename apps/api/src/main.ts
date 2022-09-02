import { createServer } from 'http';
import app from './app/app';

const port = process.env.port || 3333;

const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

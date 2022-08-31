import * as express from 'express';
import { Message } from '@blockchain/api-interfaces';
import { blockRoutes } from './app/block/'
const app = express();

// const greeting: Message = { message: 'Welcome to api!' };

// app.get('/api', (req, res) => {
//   res.send(greeting);
// });

app.use('/api/block', blockRoutes)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

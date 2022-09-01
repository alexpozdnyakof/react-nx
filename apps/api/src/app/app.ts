import * as express from 'express';
import { blockRoutes } from './block/';

const app = express();

app.use('/api/block', blockRoutes);

export default app;

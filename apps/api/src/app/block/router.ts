import { Router } from 'express';
import getLatestBlocks from './controller';

const router = Router();

router.get('/latest', (req, res) =>
  getLatestBlocks().then((data) => res.send(data))
);

export default router;

import axios from 'axios';
import { Router } from 'express';
import { Block } from '@blockchain/api-interfaces';

const router = Router();

router.get('/latest', (_, res) => {
  const url = `https://blockchain.info/blocks/${Date.now()}?format=json`
  return axios.get<{data: Array<Block>}>(url)
  .then(function ({data}) {
    res.send(data)
  })
  .catch(function (error) {
    console.log(error);
  })
 });


 export default router;

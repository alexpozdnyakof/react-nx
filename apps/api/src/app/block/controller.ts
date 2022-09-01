import { Block } from '@blockchain/api-interfaces';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';

export default function getLatestBlocks(): Promise<Array<Block> | void> {
  const url = `${environment.blockchainApi}blocks/${Date.now()}?format=json`;

  return axios
    .get(url)
    .then((response: AxiosResponse<Array<Block>>) => response.data)
    .then((data) => data.slice(0, 10))
    .catch((error) => console.log(error));
}

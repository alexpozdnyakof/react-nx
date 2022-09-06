import { Block } from '@blockchain/api-interfaces';
import { latestBlocksModel } from './model';

export default function getLatestBlocks(): Promise<Array<Block> | void> {
  return Promise.resolve(latestBlocksModel());
}

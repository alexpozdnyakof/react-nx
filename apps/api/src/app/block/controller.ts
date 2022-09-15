import { BlockShort } from '@blockchain/api-interfaces';
import { latestBlocksModel } from './model';

export default function getLatestBlocks(): Promise<Array<BlockShort> | void> {
  return Promise.resolve(latestBlocksModel());
}

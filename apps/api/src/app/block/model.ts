import { BlockShort } from '@blockchain/api-interfaces';

export function latestBlocksModel(): Array<BlockShort> {
  return [
    ...new Array(5).fill({
      index: 75260722,
      time: Date.now(),
      size: 1200,
      txsCount: 723,
      occupancy: 71,
    }),
  ];
}

import { BlockShort } from '@blockchain/api-interfaces';

export const BLX_DATA: Array<BlockShort> = [
  ...new Array(5).fill({
    index: 75260722,
    time: 1663680799353,
    size: 1200,
    txsCount: 723,
    occupancy: 71,
  }),
];

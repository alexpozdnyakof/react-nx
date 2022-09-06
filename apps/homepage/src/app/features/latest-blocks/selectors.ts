import { BlockCardProps } from '@blockchain/blockchain/ui-shared';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const formatDate = (stamp: number) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date(stamp));

const kilobyteToMegabyteWithUnit = (sizeKb: number) => `${sizeKb * 1000} Mb`;

export const selectLatestBlocks = createSelector(
  (state: RootState) => state.latestBlocks.blocks,
  (blocks): Array<BlockCardProps> =>
    blocks.map((block) => ({
      index: block.index.toString(),
      time: formatDate(block.time),
      size: kilobyteToMegabyteWithUnit(block.sizeKb),
      txsCount: block.txsCount.toString().concat(' Txs'),
      occupancy: block.occupancy.toString().concat('%'),
    }))
);

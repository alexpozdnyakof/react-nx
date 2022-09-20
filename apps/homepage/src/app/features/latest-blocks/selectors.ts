import { BlockShort } from '@blockchain/api-interfaces';
import { BlockCardProps } from '@blockchain/blockchain/ui-shared';
import { dateToString, kilobyteToMegabyte } from '@blockchain/data-formatters';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { withUnit } from '../../utils';

const createLatestBlockProps = ({
  index,
  time,
  sizeKb,
  txsCount,
  occupancy,
}: BlockShort): BlockCardProps => ({
  index: index.toString(),
  time: dateToString(new Date(time)),
  size: withUnit(kilobyteToMegabyte(sizeKb), 'mb'),
  txsCount: withUnit(txsCount, 'tx'),
  occupancy: withUnit(occupancy, '%'),
});

export const selectLatestBlocks = createSelector(
  (state: RootState) => state.latestBlocks.blocks,
  (blocks): Array<BlockCardProps> => blocks.map(createLatestBlockProps)
);

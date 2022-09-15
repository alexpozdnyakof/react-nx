import { Tx } from '@blockchain/api-interfaces';
import { createSelector } from '@reduxjs/toolkit';
import type { TxProps } from '@blockchain/blockchain/ui-shared';
import { RootState } from '../../store';
import { dateToString } from '@blockchain/data-formatters';

const selectLatestTxs = createSelector(
  (state: RootState) => state.latestTxs.txs,
  (txs: Array<Tx>) => txs.slice(0, 10)
);

const createTxProps = (tx: Tx): TxProps => ({
  ...tx,
  time: dateToString(new Date(tx.time)),
  amountBtc: `${tx.amountBtc} Btc`,
  amountUsd: `${tx.amountUsd} Usd`,
});

export const selectTxProps = createSelector(selectLatestTxs, (txs: Array<Tx>) =>
  txs.map((t) => createTxProps(t))
);


import { Tx } from '@blockchain/api-interfaces';
import { TxsTable } from '../txs-table';
import Widget from '../widget/widget';

/* eslint-disable-next-line */
export interface LatestTxsProps {
  txs: Array<Tx>
}
export function LatestTxs({txs}: LatestTxsProps) {
  return (
  <Widget
    title="Latest Transactions"
    subtitle="Bitcoin"
    symbol="https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png"
    link="https://www.blockchain.com/btc/unconfirmed-transactions"
  >
      <TxsTable txs={txs}/>
   </Widget>
  );
}

export default LatestTxs;


import { Tx } from '@blockchain/api-interfaces';
import Widget from '../widget/widget';
import styles from './latest-txs.module.less';
import Table from './table/table';

/* eslint-disable-next-line */
export interface LatestTxsProps {
  txs: Array<Tx>
}

const joinStyles = (styles: {readonly [key: string] : string}) => (x: Array<string>) => x.map(z => styles[z]).join(' ')

export function LatestTxs({txs}: LatestTxsProps) {
  const multiClass = joinStyles(styles)
  return (
  <Widget
    title="Latest Transactions"
    subtitle="Bitcoin"
    symbol="https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png"
    link="https://www.blockchain.com/btc/unconfirmed-transactions"
  >
      <Table>
        {txs.map((tx) => (
          <Table.Row key={tx.hash}>
            <span className={multiClass(['Tx-Cell'])}>{tx.hash}</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_time'])}>{new Intl.DateTimeFormat('en-GB').format(new Date(tx.time))}</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_amount'])}>{tx.amountBtc} BTC</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_amount'])}>{tx.amountUsd}</span>
          </Table.Row>
        ))}
      </Table>
   </Widget>
  );
}

export default LatestTxs;

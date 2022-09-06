import { Tx } from '@blockchain/api-interfaces';
import styles from './txs-table.module.less';

/* eslint-disable-next-line */
export interface TxsTableProps {
  txs: Array<Tx>
}
const joinStyles = (styles: {readonly [key: string] : string}) => (x: Array<string>) => x.map(z => styles[z]).join(' ')
export function TxsTable({txs}: TxsTableProps) {
  const multiClass = joinStyles(styles)

  return (
    <div className={styles['Table']}>
        {txs.map((tx,i) => (
          <div className={styles['Table-Row']} data-testid="table-body-row" key={tx.hash.concat(i.toString())}>
            <span className={multiClass(['Tx-Cell'])}>{tx.hash}</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_time'])}>{new Intl.DateTimeFormat('en-GB').format(new Date(tx.time))}</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_amount'])}>{tx.amountBtc} BTC</span>
            <span className={multiClass(['Tx-Cell', 'Tx-Cell_amount'])}>{tx.amountUsd}</span>
          </div>
        ))}
      </div>
  );
}

export default TxsTable;

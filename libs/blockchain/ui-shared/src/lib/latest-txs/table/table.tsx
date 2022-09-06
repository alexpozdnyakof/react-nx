import { PropsWithChildren } from 'react';
import styles from './table.module.less';

/* eslint-disable-next-line */
export interface TableProps {}

export function Table({children}: TableProps & PropsWithChildren) {
  return (
    <div className={styles['Table']}>
      {children}
    </div>
  );
}

Table.Row = ({children}: PropsWithChildren) => (<div className={styles['Table-Row']} data-testid="table-body-row">{children}</div>)

export default Table;


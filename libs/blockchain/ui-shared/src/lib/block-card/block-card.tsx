import styles from './block-card.module.less';

/* eslint-disable-next-line */
export interface BlockCardProps {
  testid?: string
  index: string,
  time: string,
  size: string,
  txsCount: number
  occupancy: number,
}

export function BlockCard({index, time, size, txsCount, occupancy, testid}: BlockCardProps) {
  return (
    <div className={styles['BlockCard']} data-testid={testid}>
      <div className={styles['Block-Indicator']}>
        <div className={styles['Indicator']}>
          <div className={styles['Payload']} style={{height: `${occupancy}%`}}>
            <div className={styles['Payload-Fill']}></div>
          </div>
        </div>
      </div>

      <div className={styles['Block-Description']}>
        <div className={styles['Description-Item']}>
          <div className={styles['Block-Title']}>{index}</div>
        </div>
        <div className={styles['Description-Item']}>
          <div className={styles['Block-Time']}>{time}</div>
        </div>
        <div className={styles['Description-Item']}>
          <div className={styles['Block-Size']}>{txsCount} Txs  • {size}</div>
        </div>
      </div>
    </div>
  );
}

export default BlockCard;

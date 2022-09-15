import styles from './block-card.module.less';

/* eslint-disable-next-line */
export interface BlockCardProps {
  testid?: string
  index: string,
  time: string,
  size: string,
  txsCount: string
  occupancy: string,
}

export function BlockCard({index, time, size, txsCount, occupancy, testid}: BlockCardProps) {
  return (
    <div className={styles['BlockCard']} data-testid={testid}>
      <div className={styles['Block-Indicator']}>
        <div className={styles['Indicator']}>
          <div className={styles['Payload']} style={{height: occupancy}} data-testid="occupancy-payload">
            <div className={styles['Payload-Fill']}></div>
          </div>
        </div>
      </div>

      <div className={styles['Block-Description']}>
        <div className={styles['Description-Item']}>
          <span className={styles['Block-Title']}>{index}</span>
        </div>
        <div className={styles['Description-Item']}>
          <span className={styles['Block-Time']}>{time}</span>
        </div>
        <div className={styles['Description-Item']}>
          <span className={styles['Block-Size']}>{txsCount}  • {size}</span>
        </div>
      </div>
    </div>
  );
}

export default BlockCard;

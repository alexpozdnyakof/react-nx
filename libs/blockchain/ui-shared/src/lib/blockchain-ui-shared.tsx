import styles from './blockchain-ui-shared.module.less';

/* eslint-disable-next-line */
export interface BlockchainUiSharedProps {}

export function BlockchainUiShared(props: BlockchainUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BlockchainUiShared!</h1>
    </div>
  );
}

export default BlockchainUiShared;

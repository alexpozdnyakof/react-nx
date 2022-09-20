import { BlockCard, Widget } from '@blockchain/blockchain/ui-shared';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store-hooks';
import { selectLatestBlocks } from './selectors';
import { load } from './slice';
import styles from './latest-blocks.module.less';


export function LatestBlocks() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(load())

  }, [dispatch])

  const blocks = useSelector(selectLatestBlocks);

  return (
    <Widget
      title="Latest Blocks"
      subtitle="Bitcoin"
      symbol="https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png"
      link="https://www.blockchain.com/btc/unconfirmed-transactions"
    >
      {blocks.map((block, i) => (
        <div className={styles['Block-Container']} key={block.index.concat(i.toString())}>
          <BlockCard {...block} testid="block-card"/>
        </div>
      ))}
    </Widget>
  );
}

export default LatestBlocks;

import Widget from '../widget/widget';
import BlockCard, { BlockCardProps } from '../block-card/block-card';
import styles from './latest-blocks.module.less';

/* eslint-disable-next-line */
export interface LatestBlocksProps {
  blocks: Array<BlockCardProps>
}

export function LatestBlocks({blocks}: LatestBlocksProps) {
  return (
    <Widget
      title="Latest Blocks"
      subtitle="Bitcoin"
      symbol="https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png"
      link="https://www.blockchain.com/btc/unconfirmed-transactions"
    >
      {blocks.map((block, i) => (<BlockCard {...block} testid="block-card" key={block.index.concat(i.toString())}/>))}
    </Widget>
  );
}

export default LatestBlocks;

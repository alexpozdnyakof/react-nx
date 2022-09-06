import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LatestTxs, LatestTxsProps} from './latest-txs'
import { TXS_DATA } from './data'

export default {
  component: LatestTxs ,
  title: 'Latest Txs',
} as ComponentMeta<typeof LatestTxs>;

const Template: ComponentStory<typeof LatestTxs> = (args: LatestTxsProps) => (
<div style={{width: '360px', fontSize: '13px', height: '370px'}}><LatestTxs {...args} /></div>
);

export const Primary = Template.bind({});

Primary.args = {
  txs: TXS_DATA
};

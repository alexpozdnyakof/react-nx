import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TxsTable, TxsTableProps} from './txs-table'
import { TXS_DATA } from './data'

export default {
  component: TxsTable ,
  title: 'Txs Table',
} as ComponentMeta<typeof TxsTable>;

const Template: ComponentStory<typeof TxsTable> = (args: TxsTableProps) => (
<div style={{width: '360px', fontSize: '13px', height: '370px'}}><TxsTable {...args} /></div>
);

export const Element = Template.bind({});

Element.args = {
  txs: TXS_DATA
};

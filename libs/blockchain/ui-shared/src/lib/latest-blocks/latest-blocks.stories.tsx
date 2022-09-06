import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LatestBlocks, LatestBlocksProps} from './latest-blocks'
import { BLXS_DATA } from './data'

export default {
  component: LatestBlocks,
  title: 'Widgets/Latest Blocks',
} as ComponentMeta<typeof LatestBlocks>;

const Template: ComponentStory<typeof LatestBlocks> = (args: LatestBlocksProps) => (
  <div style={{width: '360px', fontSize: '13px', height: '370px'}}><LatestBlocks {...args} /></div>
);

export const Element = Template.bind({});

Element.args = {
  blocks: BLXS_DATA
};

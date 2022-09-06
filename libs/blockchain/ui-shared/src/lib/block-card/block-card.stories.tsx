import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlockCard, BlockCardProps} from './block-card'
import { BLX_DATA } from './data'

export default {
  component: BlockCard,
  title: 'Block Card',
} as ComponentMeta<typeof BlockCard>;

const Template: ComponentStory<typeof BlockCard> = (args: BlockCardProps) => (
  <div style={{width: '360px', fontSize: '13px', height: '370px'}}><BlockCard {...args} /></div>
);

export const Element = Template.bind({});

Element.args = {
    ...BLX_DATA[0]
};

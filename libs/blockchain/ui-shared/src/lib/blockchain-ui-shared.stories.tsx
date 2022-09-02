import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlockchainUiShared } from './blockchain-ui-shared';

export default {
  component: BlockchainUiShared,
  title: 'BlockchainUiShared',
} as ComponentMeta<typeof BlockchainUiShared>;

const Template: ComponentStory<typeof BlockchainUiShared> = (args) => (
  <BlockchainUiShared {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

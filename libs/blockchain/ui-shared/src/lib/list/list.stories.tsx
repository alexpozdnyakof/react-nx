import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './list'

export default {
  component: List,
  title: 'List',
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

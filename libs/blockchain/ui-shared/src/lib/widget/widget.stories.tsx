import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Widget, WidgetProps} from './widget'

export default {
  component: Widget,
  title: 'Widget',
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args: Partial<WidgetProps>) => (
<Widget {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bitcoin',
  subtitle: 'btc',
  symbol: 'https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png',
  link: 'https://www.blockchain.com/explorer/assets/BTC',
};

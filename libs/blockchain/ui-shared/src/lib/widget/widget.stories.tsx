import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Widget, WidgetProps} from './widget'

export default {
  component: Widget,
  title: 'Widget',
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args: Partial<WidgetProps>) => (
<Widget {...args}>
  <div style={{
    width: '100%',
    backgroundImage: 'var(--gradient-orange)',
    height: '320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize:'20px',
  }}>Content</div></Widget>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bitcoin',
  subtitle: 'btc',
  symbol: 'https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png',
  link: 'https://www.blockchain.com/explorer/assets/BTC',
};

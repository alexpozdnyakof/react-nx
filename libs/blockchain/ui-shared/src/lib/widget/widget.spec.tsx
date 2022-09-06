import { render } from '@testing-library/react';

import Widget, { WidgetProps } from './widget';

describe('Widget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Widget />);
    expect(baseElement).toBeTruthy();
  });

  it('should bind props data to dom elements', () => {
    const props: WidgetProps = {
      title: 'Bitcoin',
      subtitle: 'btc',
      symbol: 'https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png',
      link: 'https://www.blockchain.com/explorer/assets/BTC',
    }

    const { getByText, getByTestId } = render(<Widget {...props} />);

    expect(getByText(props.title)).toBeTruthy();
    expect(getByText(props.subtitle)).toBeTruthy();
    expect(getByText(props.subtitle)).toBeTruthy();
    expect(getByTestId('title-link')).toHaveAttribute('href', props.link);
    expect(getByTestId('arrow-link')).toHaveAttribute('href', props.link);
  });

  it('should render children', () => {
    const childTestId = 'inner';
    const { getByTestId } = render(<Widget><div data-testid={childTestId}></div></Widget>);

    expect(getByTestId(childTestId)).toBeInTheDocument()
  })

  it('should not render img if symbol prop not passed', () => {
    const { queryByAltText } = render(<Widget/>);

    expect(queryByAltText('widget symbol')).not.toBeInTheDocument()
  })


});

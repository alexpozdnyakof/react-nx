import { render } from '@testing-library/react';
import { BLX_DATA } from './data';

import BlockCard from './block-card';

describe('BlockCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockCard {...BLX_DATA[0]}/>);
    expect(baseElement).toBeTruthy();
  });


  it('should render props successfully', () => {
    const { getByText, getByTestId } = render(<BlockCard {...BLX_DATA[0]}/>);
    expect(getByText(BLX_DATA[0].index)).toBeInTheDocument();
    expect(getByText(BLX_DATA[0].time)).toBeInTheDocument();
    expect(getByTestId('occupancy-payload')).toHaveStyle({'height': BLX_DATA[0].occupancy});
  });
});

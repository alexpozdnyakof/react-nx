import { render } from '@testing-library/react';
import { BLXS_DATA } from '../latest-blocks/data';

import BlockCard from './block-card';

describe('BlockCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockCard {...BLXS_DATA[0]}/>);
    expect(baseElement).toBeTruthy();
  });


  it('should render props successfully', () => {
    const { getByText, getByTestId } = render(<BlockCard {...BLXS_DATA[0]}/>);
    expect(getByText(BLXS_DATA[0].index)).toBeInTheDocument();
    expect(getByText(BLXS_DATA[0].time)).toBeInTheDocument();
    expect(getByTestId('occupancy-payload')).toHaveStyle({'height': BLXS_DATA[0].occupancy});
  });
});

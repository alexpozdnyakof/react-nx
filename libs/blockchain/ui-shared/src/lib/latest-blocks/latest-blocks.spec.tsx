import { render } from '@testing-library/react';

import LatestBlocks from './latest-blocks';
import { BLXS_DATA } from './data';
describe('LatestBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestBlocks blocks={BLXS_DATA} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const {  getAllByTestId } = render(<LatestBlocks blocks={BLXS_DATA} />);
    expect(getAllByTestId('block-card')).toHaveLength(BLXS_DATA.length)
  });
});

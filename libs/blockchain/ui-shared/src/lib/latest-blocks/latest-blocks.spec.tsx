import { render } from '@testing-library/react';

import LatestBlocks from './latest-blocks';
import { BLXS_DATA } from './data';
describe('LatestBlocks', () => {
  it('should render successfully', () => {
    const { baseElement, getAllByTestId } = render(<LatestBlocks blocks={BLXS_DATA} />);
    expect(baseElement).toBeTruthy();
    expect(getAllByTestId('block-card')).toHaveLength(BLXS_DATA.length)
  });
});

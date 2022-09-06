import { render } from '@testing-library/react';

import LatestBlocks from './latest-blocks';

describe('LatestBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestBlocks />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import BlockchainUiShared from './blockchain-ui-shared';

describe('BlockchainUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockchainUiShared />);
    expect(baseElement).toBeTruthy();
  });
});

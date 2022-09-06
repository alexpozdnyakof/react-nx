import { render } from '@testing-library/react';
import { BLXS_DATA } from '../latest-blocks/data';

import BlockCard from './block-card';

describe('BlockCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockCard {...BLXS_DATA[0]}/>);
    expect(baseElement).toBeTruthy();
  });
});

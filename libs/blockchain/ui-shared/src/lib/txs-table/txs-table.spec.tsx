import { render } from '@testing-library/react';
import { TXS_DATA } from './data';

import TxsTable from './txs-table';

describe('TxsTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TxsTable txs={TXS_DATA}/>);
    expect(baseElement).toBeTruthy();
  });
});

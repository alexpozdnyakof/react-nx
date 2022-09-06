import { render } from '@testing-library/react';
import LatestTxs from './latest-txs';
import { TXS_DATA} from './data';

describe('LatestTxs', () => {
  it('should render successfully', () => {
    const { baseElement, getAllByTestId } = render(<LatestTxs txs={TXS_DATA}/>);
    expect(baseElement).toBeTruthy();
    expect(getAllByTestId('table-body-row')).toHaveLength(TXS_DATA.length)
  });
});

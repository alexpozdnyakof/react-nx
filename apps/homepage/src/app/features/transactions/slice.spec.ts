import { DEMO_DATA } from './data';
import reducer, {
  load,
  loadFailed,
  loadSuccess,
  TransactionState,
} from './slice';
describe('latest transactions reducer', () => {
  const initialState: TransactionState = {
    txs: [],
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle load', () => {
    const actual = reducer(initialState, load());
    expect(actual.status).toEqual('loading');
  });

  it('should handle loadSuccess', () => {
    const actual = reducer(initialState, loadSuccess(DEMO_DATA));
    expect(actual.txs).toEqual(DEMO_DATA);
  });

  it('should handle loadFailed', () => {
    const actual = reducer(initialState, loadFailed());
    expect(actual.status).toEqual('failed');
  });
});

import { BLX_DATA } from './data';
import reducer, {
  load,
  loadFailed,
  loadSuccess,
  LatestBlockState,
} from './slice';
describe('latest transactions reducer', () => {
  const initialState: LatestBlockState = {
    blocks: [],
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
    const actual = reducer(initialState, loadSuccess(BLX_DATA));
    expect(actual.blocks).toEqual(BLX_DATA);
  });

  it('should handle loadFailed', () => {
    const actual = reducer(initialState, loadFailed());
    expect(actual.status).toEqual('failed');
  });
});

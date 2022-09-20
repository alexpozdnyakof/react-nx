import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { loadLatestBlocks } from './saga';
import axios from 'axios';
import { BLX_DATA } from './data';
import { loadSuccess } from './slice';
describe('latest blocks saga', () => {
  it('should load data and create action', () =>
    expectSaga(loadLatestBlocks)
      .provide([
        [matchers.call.fn(axios.get), Promise.resolve({ data: BLX_DATA })],
      ])
      .put(loadSuccess({ data: BLX_DATA }))
      .run());
});

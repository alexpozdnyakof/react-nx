import { BlockShort } from '@blockchain/api-interfaces';
import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { load, loadSuccess } from './slice';

export function* loadLatestBlocks() {
  try {
    const response: AxiosResponse<Array<BlockShort>> = yield call(
      axios.get,
      'api/block/latest'
    );

    yield put(loadSuccess({ data: response.data }));
  } catch (e) {
    throw new Error('Cannot load latest blocks');
  }
}

export function* latestBlockSaga() {
  yield takeEvery(load.type, loadLatestBlocks);
}

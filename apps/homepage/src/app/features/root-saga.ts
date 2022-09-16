import { fork } from 'redux-saga/effects';
import { latestBlockSaga } from './latest-blocks/saga';
import { latestTransactionsSaga } from './transactions';

export default function* rootSaga() {
  try {
    yield fork(latestTransactionsSaga);
    yield fork(latestBlockSaga);
  } catch (e) {
    console.log('root level');
    console.log({ e });
  }
}

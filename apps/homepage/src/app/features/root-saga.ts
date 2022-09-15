import { fork } from 'redux-saga/effects';
import { latestBlockSaga } from './latest-blocks/saga';
import { watchOnPings } from './transactions/ws-saga';

export default function* rootSaga() {
  try {
    yield fork(watchOnPings);
    yield fork(latestBlockSaga);
  } catch (e) {
    console.log('root level');
    console.log({ e });
  }
}

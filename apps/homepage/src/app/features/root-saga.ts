import { call, fork, spawn } from 'redux-saga/effects';
import { transactionsSaga } from './transactions';
import { watchOnPings } from './transactions/ws-saga';

export default function* rootSaga() {
  try {
    yield fork(watchOnPings);
    yield fork(transactionsSaga);
  } catch (e) {
    console.log('root level');
    console.log({ e });
  }
}

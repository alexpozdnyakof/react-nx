import { Server } from 'mock-socket';
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { loadSuccess } from './slice';
import latestTransactionsSaga, { createSocketChannel } from './saga';
import transactionsSliceReducer from './slice';
import { DEMO_DATA } from './data';

describe('Latest transactions saga', () => {
  let wsServer: Server;

  beforeEach(() => {
    wsServer = new Server('ws://localhost:3334');

    wsServer.on('connection', (socket) => {
      socket.on('message', (message) => {
        console.log('Received a message from the client', message);
      });
      socket.send(JSON.stringify(DEMO_DATA));
    });
  });

  afterEach(() => {
    wsServer.close();
  });

  it('should create socket channel', () => {
    const saga = latestTransactionsSaga();
    expect(saga.next().value).toEqual(
      call(createSocketChannel, 'ws://localhost:3334')
    );
  });

  it('should put action with transactions array', () => {
    return expectSaga(latestTransactionsSaga)
      .withReducer(transactionsSliceReducer, { status: 'idle', txs: [] })
      .put(loadSuccess(DEMO_DATA))
      .run()
      .then((result) => expect(result.storeState.txs).toEqual(DEMO_DATA));
  });
});

import { EventChannel, eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { loadSuccess, LoadSuccessPayload } from './slice';

export const createWebSocketConnection = (url: string) => new WebSocket(url);

export function createEventChannel(socket: WebSocket) {
  socket.onopen = () => console.log('🌎Txs connection opened');

  return eventChannel<LoadSuccessPayload>((emit) => {
    socket.onmessage = (event: MessageEvent<string>) => {
      const data: LoadSuccessPayload = JSON.parse(event.data);
      emit(data);
    };

    socket.onerror = (event: Event) => {
      console.error({ event });
      throw new Error('socket error');
    };

    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  });
}

export function createSocketChannel(
  url: string
): EventChannel<LoadSuccessPayload> {
  const connection = createWebSocketConnection(url);

  return createEventChannel(connection);
}

export default function* latestTransactionsSaga() {
  const socketChannel: EventChannel<LoadSuccessPayload> = yield call(
    createSocketChannel,
    'ws://localhost:3334'
  );

  while (true) {
    try {
      console.log('💸💸💸 watching transactions');

      const payload: LoadSuccessPayload = yield take(socketChannel);

      yield put(loadSuccess(payload));
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}

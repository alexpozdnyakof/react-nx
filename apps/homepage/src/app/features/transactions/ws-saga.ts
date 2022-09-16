import { EventChannel, eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { loadSuccess, LoadSuccessPayload } from './slice';

const createWebSocketConnection = () => new WebSocket('ws://localhost:3334');

export function createSocketChannel(socket: WebSocket) {
  socket.onopen = () => {
    console.log(socket);
    socket.send('hello');
  };

  return eventChannel((emit) => {
    const pingHandler = (event: MessageEvent) => {
      emit({ data: JSON.parse(event.data) });
    };

    const errorHandler = (errorEvent: Event) => {
      console.error({ errorEvent });
      emit(new Error('socket error'));
    };

    socket.onmessage = pingHandler;
    socket.onerror = errorHandler;

    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  });
}

export default function* latestTransactionsSaga() {
  const socket: WebSocket = yield call(createWebSocketConnection);
  const socketChannel: EventChannel<LoadSuccessPayload> = yield call(
    createSocketChannel,
    socket
  );

  while (true) {
    try {
      console.log('🏓 watching pings');

      const payload: LoadSuccessPayload = yield take(socketChannel);
      yield put(loadSuccess(payload));
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}

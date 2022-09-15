import { eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { loadSuccess } from './slice';

const createWebSocketConnection = () => new WebSocket('ws://localhost:3334');

function createSocketChannel(socket: WebSocket) {
  socket.onopen = () => {
    console.log(socket);
    socket.send('hello');
∏  };

  return eventChannel((emit) => {
    const pingHandler = (event: MessageEvent) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: Event) => {
      console.error({errorEvent});
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

export function* watchOnPings(): any {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      console.log('🏓 watching pings');
      const payload = yield take(socketChannel);
      yield put(loadSuccess({ data: JSON.parse(payload) }));
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}

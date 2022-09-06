import { eventChannel } from 'redux-saga';
import { apply, call, delay, fork, put, take } from 'redux-saga/effects';

const createWebSocketConnection = () => new WebSocket('ws://localhost:3334');

function createSocketChannel(socket: WebSocket) {
  socket.onopen = () => {
    console.log(socket);
    socket.send('hello');
  };

  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel((emit) => {
    const pingHandler = (event: MessageEvent) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      console.log(event.data);
      emit(event.data);
    };

    const errorHandler = (errorEvent: Event) => {
      // create an Error object and put it into the channel
      emit(new Error('socket error'));
    };

    // setup the subscription
    socket.onmessage = pingHandler;
    socket.onerror = errorHandler;

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  });
}

// reply with a `pong` message by invoking `socket.emit('pong')`
export function* pong(socket: WebSocket): any {
  yield delay(5000);
  yield apply(socket, socket.send, ['pong']); // call `emit` as a method with `socket` as context
}

export function* watchOnPings(): any {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      // An error from socketChannel will cause the saga jump to the catch block
      console.log('🏓 watching pings');
      const payload = yield take(socketChannel);
      yield put({ type: 'INCOMING_PONG_PAYLOAD', payload });
      yield fork(pong, socket);
    } catch (err) {
      console.error('socket error:', err);
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

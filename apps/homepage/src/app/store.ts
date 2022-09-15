import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './features/root-saga';
import { transactionReducer } from './features/transactions';
import { latestBlockReducer } from './features/latest-blocks';

const sagas = createSagaMiddleware();

const store = configureStore({
  reducer: {
    latestTxs: transactionReducer,
    latestBlocks: latestBlockReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagas),
});

sagas.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

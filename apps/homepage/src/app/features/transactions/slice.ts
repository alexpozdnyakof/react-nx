import { Tx } from '@blockchain/api-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionState {
  txs: Array<Tx>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TransactionState = {
  txs: [],
  status: 'idle',
};

export type LoadSuccessPayload = Array<Tx>;

export const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    load: (state) => {
      state.status = 'loading';
    },
    loadSuccess: (state, action: PayloadAction<LoadSuccessPayload>) => {
      state.txs = [...action.payload, ...state.txs];
      state.status = 'idle';
    },
  },
});

export const { load, loadSuccess } = transactionsSlice.actions;

export default transactionsSlice.reducer;

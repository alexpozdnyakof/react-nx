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

export const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    load: (state) => {
      state.status = 'loading';
    },
    loadSuccess: (state, action: PayloadAction<{ data: Array<Tx> }>) => {
      state.txs = [...action.payload.data, ...state.txs];
      state.status = 'idle';
    },
  },
});

export const { load, loadSuccess } = transactionsSlice.actions;

export default transactionsSlice.reducer;

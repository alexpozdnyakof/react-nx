import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Transaction = {
  id: string;
  hash: string;
}

interface TransactionState {
  txs: Array<Transaction>
  status: 'idle' | 'loading' | 'failed'
}

const initialState: TransactionState = {
  txs: [],
  status: 'idle'
}

export const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    load: (state) => { state.status = 'loading'},
    loadSuccess: (state, action: PayloadAction<{data: Array<Transaction>}>) => {
      state.txs = [...action.payload.data, ...state.txs];
      state.status = 'idle'

    }
  }
})

export const { load, loadSuccess } = transactionsSlice.actions

export default transactionsSlice.reducer

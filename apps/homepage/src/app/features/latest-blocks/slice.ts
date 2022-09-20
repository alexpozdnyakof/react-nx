import { BlockShort } from '@blockchain/api-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../status';

export type LatestBlockState = {
  blocks: Array<BlockShort>;
} & Status;

const initialState: LatestBlockState = {
  blocks: [],
  status: 'idle',
};

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    load: (state) => {
      state.status = 'loading';
    },
    loadSuccess: (state, action: PayloadAction<Array<BlockShort>>) => {
      state.blocks = [...action.payload];
      state.status = 'idle';
    },
    loadFailed: (state) => {
      state.status = 'failed';
    },
  },
});

export const { load, loadSuccess, loadFailed } = blocksSlice.actions;

export default blocksSlice.reducer;

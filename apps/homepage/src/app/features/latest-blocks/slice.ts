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
    loadSuccess: (
      state,
      action: PayloadAction<{ data: Array<BlockShort> }>
    ) => {
      state.blocks = [...action.payload.data];
      state.status = 'idle';
    },
  },
});

export const { load, loadSuccess } = blocksSlice.actions;

export default blocksSlice.reducer;

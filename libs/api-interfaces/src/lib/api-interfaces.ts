export interface Message {
  message: string;
}

export interface Block {
  hash: string;
  height: number;
  time: number;
  block_index: number;
  sizeKb: number;
  includedTxs: number;
}

export interface BlockShort {
  index: number;
  time: number;
  sizeKb: number;
  txsCount: number;
  occupancy: number;
}
export interface Tx {
  hash: string;
  time: number;
  amountBtc: number;
  amountUsd: number;
}

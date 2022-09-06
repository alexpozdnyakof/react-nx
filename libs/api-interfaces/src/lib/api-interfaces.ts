export interface Message {
  message: string;
}

export interface Block {
  hash: string;
  height: number;
  time: number;
  block_index: number;
}
export interface Tx {
  hash: string;
  time: number;
  amountBtc: number;
  amountUsd: number;
}

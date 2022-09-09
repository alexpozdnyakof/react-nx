import { Tx } from '@blockchain/api-interfaces';
import { randomIntegerInRange } from '@blockchain/data-generators';
import { txFactory } from './tx-factory';

export function getLatest(): Array<Tx> {
  return generateTxs(10);
}

export function getNew(): Array<Tx> {
  return generateTxs(randomIntegerInRange(1, 3));
}

function generateTxs(count: number): Array<Tx> {
  return [...new Array(count).keys()].map(txFactory);
}

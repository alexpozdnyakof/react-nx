import { Tx } from '@blockchain/api-interfaces';
import {
  randomIntegerInRange,
  numberToChar,
} from '@blockchain/data-generators';

export function txFactory(): Tx {
  const amount = generateUsd();

  return {
    hash: generateRandomTxHash(),
    time: Date.now(),
    amountBtc: generateBtc(amount),
    amountUsd: amount,
  };
}

const generateUsd = () => randomIntegerInRange(100, 20000);
const generateBtc = (usdPrice: number) => {
  const BTC_PRICE = 21008;
  return usdPrice / BTC_PRICE;
};

function generateRandomTxHash() {
  const sideGen = () =>
    [...new Array(4).keys()].map(() => {
      const i = randomIntegerInRange(0, 9);
      if (i % 3 == 0 || i % 2 !== 0) return i.toString();
      return i % 3 == 0 ? i.toString() : numberToChar(i);
    });

  return [...sideGen(), '-', ...sideGen()].join('');
}

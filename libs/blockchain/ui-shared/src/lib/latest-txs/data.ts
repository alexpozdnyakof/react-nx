const TXS_DATA = [
  ...new Array(10).fill(['ccf3e-2cd36', Date.now(), 0.76729409, 15321.09]),
].map(([hash, time, amountBtc, amountUsd]) => ({
  hash,
  time,
  amountBtc,
  amountUsd,
}));

export { TXS_DATA };

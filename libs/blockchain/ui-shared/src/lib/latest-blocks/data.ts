const BLXS_DATA = [
  ...new Array(5).fill({
    index: '752,722',
    time: new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    }).format(Date.now()),
    size: '1.2 Mb',
    txsCount: 723,
    occupancy: '71%',
  }),
];
export { BLXS_DATA };

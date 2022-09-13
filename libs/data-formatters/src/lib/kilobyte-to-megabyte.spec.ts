import { kilobyteToMegabyte } from './kilobyte-to-megabyte';

const rndmInt = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;
const rndmFloor = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

describe('kilobyte to megabyte', () => {
  const kilobytes = 3000;
  const minMaxInt = [0, 1000] as const;
  const minMaxFloor = [0.1111, 999.999999] as const;

  it('should return megabyte size', () => {
    expect(kilobyteToMegabyte(kilobytes)).toBe(3);
  });

  it(`should return number for integers between ${minMaxInt}`, () => {
    let i = 0;
    while (i < 100) {
      const rnmdIntKilobytes = rndmInt(...minMaxInt);
      expect(typeof kilobyteToMegabyte(rnmdIntKilobytes)).toBe('number');
      i = i + 1;
    }
  });

  it(`should return number for floors between ${minMaxFloor}`, () => {
    let i = 0;
    while (i < 100) {
      const rnmdIntKilobytes = rndmFloor(...minMaxFloor);
      expect(typeof kilobyteToMegabyte(rnmdIntKilobytes)).toBe('number');
      i = i + 1;
    }
  });
});

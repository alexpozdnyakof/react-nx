import randomIntegerInRange from './rndm-int-in-range';

describe('Random integer in range', () => {
  const limits = {
    min: 10,
    max: 100,
  };

  it('should generate random integer over or equal min and less or equal max', () => {
    let step = 0;
    while (step <= 100) {
      const result = randomIntegerInRange(limits.min, limits.max);
      expect(result).toBeGreaterThanOrEqual(limits.min);
      expect(result).toBeLessThanOrEqual(limits.max);
      step = step + 1;
    }
  });

  it('should generator only integers', () => {
    let step = 0;

    while (step <= 100) {
      const result = randomIntegerInRange(limits.min, limits.max);
      expect(result).toBe(Math.floor(result));

      step = step + 1;
    }
  });
});

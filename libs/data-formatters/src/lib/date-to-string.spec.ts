import dateToString from './date-to-string';

describe('Date formatter', () => {
  it('should return string', () => {
    expect(typeof dateToString(new Date())).toBe('string');
  });
});

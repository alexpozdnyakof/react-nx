import numberToChar from './number-to-char';
describe('Number to character', () => {
  const charsSeq = 'abcdefghij';

  charsSeq.split('').map((char, i) => {
    it(`should return ${char} for ${i}`, () => {
      expect(numberToChar(i)).toBe(char);
    });
  });
});

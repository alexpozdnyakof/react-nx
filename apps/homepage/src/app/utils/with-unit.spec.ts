import withUnit from './with-unit';
describe('withUnit', () => {
  it('should return 10mb for number', () => {
    expect(withUnit(10, 'mb')).toEqual('10mb');
  });

  it('should return 3tx for string', () => {
    expect(withUnit('3', 'tx')).toEqual('3tx');
  });

  it('should return 100% for number', () => {
    expect(withUnit(100, '%')).toEqual('100%');
  });
});

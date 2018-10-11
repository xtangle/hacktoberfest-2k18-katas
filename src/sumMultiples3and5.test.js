import { sumMultiples3and5 } from './sumMultiples3and5';

describe('sumMultiples3and5', () => {
  it('returns 23 given parameter 10', () => {
    expect(sumMultiples3and5(10)).toBe(23);
  });
  
  it('returns 233168 given parameter 1000', () => {
    expect(sumMultiples3and5(1000)).toBe(233168);
  });

  it('returns 543 given parameter 49', () => {
    expect(sumMultiples3and5(49)).toBe(543);
  });

  it('returns 89301183 given parameter 19564', () => {
    expect(sumMultiples3and5(19564)).toBe(89301183);
  });
});

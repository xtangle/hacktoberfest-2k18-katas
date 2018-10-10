import { trailingZeroes } from './trailingZeroes';

describe('trailingZeroes', () => {
  it('find the number of trailing 0s in n factorial', () => {
    expect(trailingZeroes(50)).toEqual(12);
    expect(trailingZeroes(1)).toEqual(0);
    expect(trailingZeroes(1000006)).toEqual(249999);
  });

  it('reject invalid number...', () => {
    expect(() => { trailingZeroes(-1); }).toThrow();
    expect(() => { trailingZeroes(5.6); }).toThrow();
  });

  it('reject non number', () => {
    expect(() => { trailingZeroes(null); }).toThrow();
    expect(() => { trailingZeroes([]); }).toThrow();
  });
});

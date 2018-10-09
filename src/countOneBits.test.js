import { countOneBits } from './countOneBits';

describe('countOneBits', () => {
  it('counts the number of 1 bit in a number', () => {
    expect(countOneBits(123)).toEqual(6);
    expect(countOneBits(42)).toEqual(3);
    expect(countOneBits(1337)).toEqual(6);
  });

  it('returns null when the input is not correct', () => {
    expect(() => countOneBits(null)).toThrow();
    expect(() => countOneBits(undefined)).toThrow();
    expect(() => countOneBits({})).toThrow();
    expect(() => countOneBits([])).toThrow();
  });
});

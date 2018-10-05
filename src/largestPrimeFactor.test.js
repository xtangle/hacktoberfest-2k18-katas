import { largestPrimeFactor } from './largestPrimeFactor';

describe('largestPrimeFactor', () => {
  it("returns a number if there's an answer", () => {
    expect(typeof largestPrimeFactor(10)).toBe('number');
  });

  it("returns null if the number has no prime factors", () => {
    expect(largestPrimeFactor(1)).toBe(null);
  });

  it('returns correct largest prime factor for 10', () => {
    expect(largestPrimeFactor(10)).toEqual(5);
  });

  it('returns correct largest prime factor for 17', () => {
    expect(largestPrimeFactor(17)).toEqual(17);
  });

  it('returns correct largest prime factor for 420', () => {
    expect(largestPrimeFactor(420)).toEqual(7);
  });
})
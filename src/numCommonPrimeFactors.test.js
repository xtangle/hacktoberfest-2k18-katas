import { numCommonPrimeFactors } from './numCommonPrimeFactors';

describe('numCommonPrimeFactors', () => {
  it('returns 0 given parameters 2, 3', () => {
    expect(numCommonPrimeFactors(2, 3)).toBe(0);
  });
  
  it('returns number of prime factors given same number', () => {
    expect(numCommonPrimeFactors(24, 24)).toBe(4);
  });

  it('returns 3 given parameters 364, 572', () => {
    expect(numCommonPrimeFactors(364, 572)).toBe(3);
  });

  it('returns 4 given parameters 680225, 81627', () => {
    expect(numCommonPrimeFactors(680225, 81627)).toBe(4);
  });
});

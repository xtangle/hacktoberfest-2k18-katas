import { countingPrimes } from './countingPrimes';

describe('countingPrimes', () => {
  it('should find all primes in an array', () => {
    expect(countingPrimes([1, 2, 3, 5, 10])).toBe(3); 
  });

  it('should find all primes in an array', () => {
    expect([]).toBe(0);
  });

  it('should receive always an array', () => {
    expect(2).toBeFalsy();
  });
})
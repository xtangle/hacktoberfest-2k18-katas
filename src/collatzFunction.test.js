import { collatzFunction } from './collatzFunction';

/*
 * You can read more about the Collatz conjecture here:
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 *
 * The general idea:
 * - if the number is even, divide it by two
 * - if the number is odd, triple it and add one
 * - return the number of steps required for the integer input to reach 1
 * - return -1 if given input is invalid
 */

describe('collatzFunction', () => {
  it('collatzFunction should return answer for valid input', () => {
    expect(collatzFunction(1)).toEqual(0);
  });

  it('collatzFunction should return answer for valid input', () => {
    expect(collatzFunction(10)).toEqual(6);
  });

  it('collatzFunction should return answer for valid input', () => {
    expect(collatzFunction(24)).toEqual(10);
  });
  
  it('collatzFunction should return -1 for invalid input', () => {
    expect(collatzFunction('10')).toEqual(-1);
  });
  
  it('collatzFunction should return -1 for invalid input', () => {
    expect(collatzFunction(0)).toEqual(-1);
  });
});

import { isPowerOfTwo } from './isPowerOfTwo';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isPowerOfTwo()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isPowerOfTwo()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isPowerOfTwo()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isPowerOfTwo()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isPowerOfTwo(); }).toThrow();
 */

describe('isPowerOfTwo', () => {
  it('returns true if the power is a power of two', () => {
    expect(isPowerOfTwo(4)).toBeTruthy();
  });

  it('returns false if the power is not a power of two', () => {
    expect(isPowerOfTwo(7)).toBeFalsy();
  });
});

import { reverseBits } from './reverseBits';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(reverseBits()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(reverseBits()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(reverseBits()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(reverseBits()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { reverseBits(); }).toThrow();
 */

describe('reverseBits', () => {
  it('reverseBits finds the ultimate answer to life, the universe and everything', () => {
    expect(reverseBits(42)).toEqual(21);
  });

  it('reverseBits find the alternate answer', () => {
    expect(reverseBits(53)).toEqual(43);
  });

  it('reverseBits reverses palindromic bits', () => {
    expect(reverseBits(85)).toEqual(85);
  });
});

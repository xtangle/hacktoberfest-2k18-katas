import { isPerfectNumber } from './isPerfectNumber';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isPerfectNumber()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isPerfectNumber()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isPerfectNumber()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isPerfectNumber()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isPerfectNumber(); }).toThrow();
 */

describe('isPerfectNumber', () => {
  it('0 is not a perfect number', () => {
    expect(isPerfectNumber(0)).toEqual(false);
  });

  it('2 is not a perfect number', () => {
    expect(isPerfectNumber(2)).toEqual(false);
  });

  it('6 is a perfect number', () => {
    expect(isPerfectNumber(6)).toEqual(true);
  });

  it('496 is a perfect number', () => {
    expect(isPerfectNumber(496)).toEqual(true);
  });
});

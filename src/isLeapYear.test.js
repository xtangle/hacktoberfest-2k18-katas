import { isLeapYear } from './isLeapYear';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isLeapYear()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isLeapYear()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isLeapYear()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isLeapYear()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isLeapYear(); }).toThrow();
 */

describe('isLeapYear', () => {
  it('isLeapYear returns false if year is not a leap year', () => {
    expect(isLeapYear(2015)).toBeFalsy();
    expect(isLeapYear(2100)).toBeFalsy();
  });

  it('isLeapYear returns true if year is a leap year', () => {
    expect(isLeapYear(2000)).toBeTruthy();
    expect(isLeapYear(2016)).toBeTruthy();
  });
});

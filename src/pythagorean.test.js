import { pythagorean } from './pythagorean';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(pythagorean()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(pythagorean()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(pythagorean()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(pythagorean()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { pythagorean(); }).toThrow();
 */

describe('pythagorean', () => {
  it('Math.sqrt(Math.pow(5, 2) + Math.pow(12, 2)) is 13', () => {
    expect(pythagorean(5,12)).toEqual(13)
  });

  it('Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2)) is 5', () => {
    expect(pythagorean(3,4)).toEqual(5)
  });

  it('Math.sqrt(Math.pow(6, 2) + Math.pow(8, 2)) is 10', () => {
    expect(pythagorean(6,8)).toEqual(10)
  });
});

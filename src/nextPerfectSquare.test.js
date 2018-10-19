import { nextPerfectSquare } from './nextPerfectSquare';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(nextPerfectSquare()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(nextPerfectSquare()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(nextPerfectSquare()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(nextPerfectSquare()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { nextPerfectSquare(); }).toThrow();
 */

describe('nextPerfectSquare', () => {
  it('should return 1 for any negative number', () => {
    expect(nextPerfectSquare(-169)).toEqual(1);
  });

  it('should return 1 for 0', () => {
    expect(nextPerfectSquare(0)).toEqual(1);
  });

  it('should return the next perfect square given any positive number', () => {
    expect(nextPerfectSquare(789)).toEqual(841);
  });

  it('should return the next perfect square given a perfect square', () => {
    expect(nextPerfectSquare(144)).toEqual(169);
  });
});

import { plusPerfect } from './plusPerfect';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(plusPerfect()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(plusPerfect()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(plusPerfect()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(plusPerfect()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { plusPerfect(); }).toThrow();
 */

describe('plusPerfect', () => {
  it('plusPerfect returns true for the value 5', () => {
    expect(plusPerfect(5)).toBeTruthy();
  });

  it('plusPerfect returns true for the value 153', () => {
    expect(plusPerfect(153)).toBeTruthy();
  });

  it('plusPerfect returns false for the value 10', () => {
    expect(plusPerfect(10)).toBeFalsy();
  });

  it('plusPerfect returns false for the value 100', () => {
    expect(plusPerfect(100)).toBeFalsy();
  });
});

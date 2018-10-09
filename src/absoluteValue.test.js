import { absoluteValue } from './absoluteValue';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(absoluteValue()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(absoluteValue()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(absoluteValue()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(absoluteValue()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { absoluteValue(); }).toThrow();
 */

describe('absoluteValue', () => {
  it('absoluteValue returns the value of -3 as 3', () => {
    expect(absoluteValue(-3)).toEqual(3);
  });

  it('absoluteValue returns the value of 0 as 0', () => {
    expect(absoluteValue(0)).toEqual(0);
  });

  it('absoluteValue returns the value of 5 as 5', () => {
    expect(absoluteValue(5)).toEqual(5);
  });

  it('absoluteValue returns the value of -981237 as 981237', () => {
    expect(absoluteValue(-981237)).toEqual(981237);
  });
});
import { numToDescendingOrder } from './numToDescendingOrder';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(numToDescendingOrder()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(numToDescendingOrder()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(numToDescendingOrder()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(numToDescendingOrder()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { numToDescendingOrder(); }).toThrow();
 */

describe('numToDescendingOrder', () => {
  it('return the numbers in descending order...', () => {
    expect(numToDescendingOrder(123)).toEqual(321);
    expect(numToDescendingOrder(111)).toEqual(111);
    expect(numToDescendingOrder(9)).toEqual(9);
    expect(numToDescendingOrder("96212")).toEqual(21269);
  });

  it('return null if the input is not a number...', () => {
    expect(numToDescendingOrder(null)).toBeNull();
    expect(numToDescendingOrder(NaN)).toBeNull();
    expect(numToDescendingOrder(true)).toBeNull();
  });
});

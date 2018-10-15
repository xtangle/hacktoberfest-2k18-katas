import { greatestNumberInArray } from './greatestNumberInArray';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(greatestNumberInArray()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(greatestNumberInArray()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(greatestNumberInArray()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(greatestNumberInArray()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { greatestNumberInArray(); }).toThrow();
 */

describe('greatestNumberInArray', () => {
  it('greatestNumberInArray does this thing...', () => {
    expect(greatestNumberInArray([1,2,3,4,5,6])).toEqual(6)
  });

  it('greatestNumberInArray does that other thing...', () => {
    expect(greatestNumberInArray([1,2,-1,-2,-3,0])).toEqual(2)
  });

  it('greatestNumberInArray can also work with negative value', () => {
    expect(greatestNumberInArray([-1,-2,-3,-4])).toEqual(-1)
  });
});

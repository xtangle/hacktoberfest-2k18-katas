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
    expect(greatestNumberInArray([-1,-2,-3,-4,-5,-6])).toEqual(-1)
  });

  it('greatestNumberInArray does a very cool thing...', () => {
    expect(greatestNumberInArray([11,-2,33,-44,55,66])).toEqual(66)
  });
});

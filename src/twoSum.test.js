import { twoSum } from './twoSum';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(twoSum()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(twoSum()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(twoSum()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(twoSum()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { twoSum(); }).toThrow();
 */

describe('twoSum', () => {
  it('twoSum does this thing...', () => {
    expect(twoSum([10, 124, 12, 15], 27)).toEqual([2, 3]);
  });

  it('twoSum does that other thing...', () => {
    expect(twoSum([10, 4, 12, 15, 16], 31)).toEqual([3, 4]);
  });

  it('twoSum does a very cool thing...', () => {
    expect(twoSum([213, 42, 421, 412, 214, 4214, 61], 274)).toEqual([0, 6]);
  });
});

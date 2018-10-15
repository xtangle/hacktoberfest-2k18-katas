import { stringRemix } from './stringRemix';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(stringRemix()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(stringRemix()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(stringRemix()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(stringRemix()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { stringRemix(); }).toThrow();
 */

describe('stringRemix', () => {
  it('stringRemix does this thing...', () => {
  	expect(stringRemix("abc", [0, 2, 1])).toEqual("acb");
  	expect(stringRemix("abcdef", [0, 2, 1, 5, 3, 4])).toEqual("acbfde");
  	expect(stringRemix("hack", [3, 2, 1, 0])).toEqual("kcah");
  	expect(stringRemix("tober", [3, 4, 0, 2, 1])).toEqual("ertbo");
  	expect(stringRemix("fest", [0, 1, 2, 3])).toEqual("fest");
  });

  it('stringRemix does a very cool thing...', () => {
  	expect(stringRemix(null, null)).toBeNull();
  	expect(stringRemix(null, NaN)).toBeNull();
  });

});

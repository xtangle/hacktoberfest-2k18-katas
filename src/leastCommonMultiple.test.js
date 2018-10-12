import { leastCommonMultiple } from './leastCommonMultiple';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(leastCommonMultiple()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(leastCommonMultiple()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(leastCommonMultiple()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(leastCommonMultiple()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { leastCommonMultiple(); }).toThrow();
 */

describe('leastCommonMultiple', () => {
  it('leastCommonMultiple for 4 and 6', () => leastCommonMultiple(4, 6)).toBe(12);

  it('leastCommonMultiple for 21 and 6.', () => leastCommonMultiple(21, 6)).toBe(42);

  it('leastCommonMultiple for 424 and 242', () => leastCommonMultiple(424, 242)).toBe(51304);
});

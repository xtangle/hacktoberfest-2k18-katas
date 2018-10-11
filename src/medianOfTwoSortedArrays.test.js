import { medianOfTwoSortedArrays } from './medianOfTwoSortedArrays';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(medianOfTwoSortedArrays()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(medianOfTwoSortedArrays()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(medianOfTwoSortedArrays()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(medianOfTwoSortedArrays()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { medianOfTwoSortedArrays(); }).toThrow();
 */

describe('medianOfTwoSortedArrays', () => {
  it('computes the correct median of [1,3] and [2]', () => {
    const result = medianOfTwoSortedArrays([1,3], [2])
    expect(result).toEqual(2.0)
  });

  it('computes the correct median of [1,2] and [3,4]', () => {
    const result = medianOfTwoSortedArrays([1,2], [3,4])
    expect(result).toEqual(2.5)  
  });
  
});

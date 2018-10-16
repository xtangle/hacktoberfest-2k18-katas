import { isValidAnagram } from './isValidAnagram';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isValidAnagram()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isValidAnagram()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isValidAnagram()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isValidAnagram()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isValidAnagram(); }).toThrow();
 */

describe('isValidAnagram', () => {
  it('Passed several valid cases.', () => {
    expect(isValidAnagram("anagram", "nagaram")).toBeTruthy();
    expect(isValidAnagram("cinema", "iceman")).toBeTruthy();
    expect(isValidAnagram("apple", "pepla")).toBeTruthy();
  });

  it('Passed several invalid cases. ', () => {
    expect(isValidAnagram("rat", "cat")).toBeFalsy();
    expect(isValidAnagram("pad", "dad")).toBeFalsy();
    expect(isValidAnagram("apple", "eleen")).toBeFalsy();
  });
});

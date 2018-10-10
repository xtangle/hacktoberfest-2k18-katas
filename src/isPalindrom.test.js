import { isPalindrom } from './isPalindrom';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isPalindrom()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isPalindrom()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isPalindrom()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isPalindrom()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isPalindrom(); }).toThrow();
 */

describe('isPalindrom', () => {
  it('returns true if the word is a palindrom', () => {
    expect(isPalindrom('anna')).toBeTruthy();
  });

  it('returns false if the word is not a palindrom', () => {
    expect(isPalindrom('annette')).toBeFalsy();
  });

  it('should ignore the capitalization', () => {
    expect(isPalindrom('Anna')).toBeTruthy();
    expect(isPalindrom('Annette')).toBeFalsy();
  });
});

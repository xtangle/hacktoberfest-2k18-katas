import { findLongestWord } from './findLongestWord';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(findLongestWord()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(findLongestWord()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(findLongestWord()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(findLongestWord()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { findLongestWord(); }).toThrow();
 */

describe('findLongestWord', () => {
  it('findLongestWord returns the longest word in a set of words', () => {
      expect(findLongestWord("sleepy depression sad").toEqual("depression"));
      expect(findLongestWord("sleepy depression supercalifragilisticexpialidocious").toEqual("supercalifragilisticexpialidocious"));
  });

  it('findLongestWord returns the longest word if there is a tie', () => {
      expect(findLongestWord("sleepy sleepy sad").toEqual("sleepy"));
      expect(findLongestWord("sad sad sad").toEqual("sad"));
  });
});

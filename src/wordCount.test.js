import { wordCount } from './wordCount';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(wordSearch()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(wordSearch()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(wordSearch()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(wordSearch()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { wordSearch(); }).toThrow();
 */

describe('wordSearch', () => {
  it('wordSearch returns 4 fish', () => {
    expect(wordCount('one fish two fish red fish blue fish', 'fish')).toEqual(4);
  });

  it('wordSearch returns 3 go\'s', () => {
    expect(wordCount('go go go', 'go')).toEqual(3);
  });

  it('wordSearch 1 hacktoberfest', () => {
    expect(wordCount('happy hacktoberfest 2018', 'hacktoberfest')).toEqual(1);
  });
});

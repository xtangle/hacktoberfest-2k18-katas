import { switchLetters } from './switchLetters';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(switchLetters()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(switchLetters()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(switchLetters()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(switchLetters()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { switchLetters(); }).toThrow();
 */

describe('switchLetters', () => {
  it('switchLetters switches first and the last letter in the string', () => {
    expect(switchLetters('hacktoberfest')).toEqual('tacktoberfesh');
  });

  it('switchLetters detects multiple words in a string and switches their first and last letter places respectively', () => {
    expect(switchLetters('OneTwoThreeFourFive')).toEqual('enoowtehretroufeivf');
  });

  it('switchLetters ignores numbers', () => {
    expect(switchLetters('3TwoThree2')).toEqual('3owtehret2');
  });
});

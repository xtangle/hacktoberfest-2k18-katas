import { bleepProfanity } from './bleepProfanity';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(bleepProfanity()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(bleepProfanity()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(bleepProfanity()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(bleepProfanity()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { bleepProfanity(); }).toThrow();
 */

describe('bleepProfanity returns a squeaky clean string free of bad words', () => {
  test('should bleep the word "crap" in the sentence: "i dont give a crap", into: "i dont give a #$@!"', () => {
    expect(bleepProfanity('i dont give a crap')).toEqual('i dont give a #$@!');
  });

  test('should remove any profanity from this sentence: "blake is a fucking dickhead"', () => {
    expect(bleepProfanity('blake is a fucking dickhead')).not.toMatch(/fuck/);
    expect(bleepProfanity('blake is a fucking dickhead')).not.toMatch(/dick/);
  });

});

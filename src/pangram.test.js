import { pangram } from './pangram';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(pangram()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(pangram()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(pangram()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(pangram()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { pangram(); }).toThrow();
 */

describe('pangram valid', () => {
  it('should be correct', () => {
    expect(panagram('A quick brown fox jumps over the lazy dog')).toEqual(true)
  });

  it('should be incorrect', () => {
    expect(panagram('I always believed it was the things you don\'t choose that makes you who you are')).toEqual(false)
  });

  it('should pass second test', () => {
    expect(panagram('Sphinx of black quartz, judge my vow.')).toEqual(true)
  });
});

describe('pangram invalid args', () => {
  it('should throw error w/ null arg', () => {
    expect(panagram(null)).toThrow()
    expect(panagram()).toThrow()
  });
});
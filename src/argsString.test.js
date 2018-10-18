import { argsString } from './argsString';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(argsString()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(argsString()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(argsString()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(argsString()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { argsString(); }).toThrow();
 */

describe('argsString', () => {
  it('argsString does this thing...', () => {
    // TODO Your own assertion here
    expect(argsString('{} {}', ['Hello', 'World!'])).toBe('Hello World!');
  });

  it('argsString does that other thing...', () => {
    // TODO Your own assertion here
    expect(argsString('{}! How are you?', ['Hey'])).toBe('Hey! How are you?');
  });

  it('argsString does a very cool thing...', () => {
    // TODO Your own assertion here
    expect(argsString('How are you?', ['Hey', 'what'])).toBe('How are you?');
  });
});

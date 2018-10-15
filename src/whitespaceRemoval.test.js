import { whitespaceRemoval } from './whitespaceRemoval';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(whitespaceRemoval()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(whitespaceRemoval()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(whitespaceRemoval()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(whitespaceRemoval()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { whitespaceRemoval(); }).toThrow();
 */

describe('whitespaceRemoval', () => {
  it('removes whitespaces from strings like this', () => {
    expect(whitespaceRemoval('       Hello World!       ').toEqual('Hello World!'))
  });
});

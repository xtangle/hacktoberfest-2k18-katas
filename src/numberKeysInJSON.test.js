import { numberKeysInJSON } from './numberKeysInJSON';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(numberKeysInJSON()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(numberKeysInJSON()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(numberKeysInJSON()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(numberKeysInJSON()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { numberKeysInJSON(); }).toThrow();
 */

describe('numberKeysInJSON', () => {
  it('numberKeysInJSON return number of keys in a json passed', () => {
    expect(numberKeysInJSON({ a: 1 })).toBe(1);
  });

  it('total number of keys in a nested json ', () => {
    expect(numberKeysInJSON({ a: 1, b: { a: 1, c: { a: 1, d: { a: 1 } } } })).toBe(7);
  });

  it('should throw error for incorrectly passed array', () => {
    expect(() => { numberKeysInJSON(undefined); }).toThrow();
    expect(() => { numberKeysInJSON(true); }).toThrow();
    expect(() => { numberKeysInJSON(100); }).toThrow();
    expect(() => { numberKeysInJSON(null); }).toThrow();
    expect(() => { numberKeysInJSON('foo'); }).toThrow();
    expect(() => { numberKeysInJSON({}); }).toThrow();
  });

});

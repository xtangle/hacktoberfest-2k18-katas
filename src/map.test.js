import { map } from './map';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(map()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(map()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(map()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(map()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { map(); }).toThrow();
 */

describe('map', () => {
  it('should return new array', () => {
    expect(map(['10', '10', '10'], parseInt)).toEqual([10, 10, 10]);
    expect(map(['10', '10', '10'], parseInt)).toEqual([10, 10, 10]);
  });

  it('should throw error if callback is not function', () => {
    expect(() => { map([], undefined); }).toThrow();
  });

  it('should throw error for incorrectly passed array', () => {
    expect(() => { map(undefined, () => {}); }).toThrow();
    expect(() => { map(true, () => {}); }).toThrow();
    expect(() => { map(100, () => {}); }).toThrow();
    expect(() => { map(null, () => {}); }).toThrow();
    expect(() => { map('foo', () => {}); }).toThrow();
    expect(() => { map({}, () => {}); }).toThrow();
  });
});

import { camelCase } from './camelCase';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(camelCase()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(camelCase()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(camelCase()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(camelCase()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { camelCase(); }).toThrow();
 */

describe('camelCase', () => {
  it('camelCase remoes all spaces and adds a capital to the beginning of the sentence', () => {
    expect(numberOfChars("hello world")).toEqual("HelloWorld");
    expect(numberOfChars("hacktoberfest rocks")).toEqual("HacktoberfestRocks");
    expect(numberOfChars("this is a large test")).toEqual("ThisIsALargeTest");
  });
});

import { formatNumber } from './formatNumber';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(formatNumber()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(formatNumber()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(formatNumber()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(formatNumber()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { formatNumber(); }).toThrow();
 */

describe('formatNumber', () => {
  it('format the number seperating thousands...', () => {
    expect(formatNumber(5010)).toEqual("5,010");
    expect(formatNumber(10111)).toEqual("10,111");
    expect(formatNumber(51234)).toEqual("51,234");
  });

  it('format the number seperating thousands...', () => {
  	expect(formatNumber(512345)).toEqual("512,345");
    expect(formatNumber(5123456)).toEqual("5,123,456");
    expect(formatNumber(51234567)).toEqual("51,234,567");
  });

  it('formatNumber does a very cool thing...', () => {
  	expect(formatNumber("somthing")).toBeNull();
  	expect(formatNumber(null)).toBeNull();
  	expect(formatNumber(NaN)).toBeNull();
  });
});

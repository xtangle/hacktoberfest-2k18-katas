import { timeConversion } from './timeConversion';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(timeConversion()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(timeConversion()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(timeConversion()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(timeConversion()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { timeConversion(); }).toThrow();
 */

describe('timeConversion', () => {

  it('timeConversion converts 0 minutes to \'0:00\'', () => {
    expect(timeConversion(0)).toEqual('0:00');
  });

  it('timeConversion converts 126 minutes to \'2:06\'', () => {
    expect(timeConversion(126)).toEqual('2:06');
  });

  it('timeConversion converts 45 minutes to \'0:45\'', () => {
    expect(timeConversion(45)).toEqual('0:45');
  });
});

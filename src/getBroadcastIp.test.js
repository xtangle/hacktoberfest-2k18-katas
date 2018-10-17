import { getBroadcastIp } from './getBroadcastIp';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(getBroadcastIp()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(getBroadcastIp()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(getBroadcastIp()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(getBroadcastIp()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { getBroadcastIp(); }).toThrow();
 */

describe('getBroadcastIp', () => {
  it('returns common broadcast IP', () => {
    expect(getBroadcastIp('192.168.0.1/24')).toEqual('192.168.0.255');
    expect(getBroadcastIp('127.0.0.1/24')).toEqual('127.0.0.255');
  });

  it('works with any mask', () => {
    expect(getBroadcastIp('127.0.0.1/8')).toEqual('127.255.255.255');
    expect(getBroadcastIp('123.45.67.89/10')).toEqual('123.63.255.255');
    expect(getBroadcastIp('8.8.8.8/14')).toEqual('8.11.255.255');
    expect(getBroadcastIp('192.168.0.1/28')).toEqual('192.168.0.15');
    expect(getBroadcastIp('192.168.0.1/16')).toEqual('192.168.255.255');
  });

  it('handles extra zeroes', () => {
    expect(getBroadcastIp('0127.00000000.0000.0001/08')).toEqual('127.255.255.255');
  });

  it('throws error on invalid IPs or masks', () => {
    expect(() => { getBroadcastIp('127.0.0.256/24'); }).toThrow();
    expect(() => { getBroadcastIp('127.0.0.1/32'); }).toThrow();
    expect(() => { getBroadcastIp('123.456.789.10/11'); }).toThrow();
    expect(() => { getBroadcastIp('127.0.0.-1/0'); }).toThrow();
  });
});

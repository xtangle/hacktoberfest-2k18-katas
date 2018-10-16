import { isFibonacci } from "./isFibonacci";

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(theFunction()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(theFunction()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(theFunction()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(theFunction()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { theFunction(); }).toThrow();
 */

describe("isFibonacci", () => {
  it("input of null,undefined,NaN return False", () => {
    expect(isFibonacci("AlphaString")).toBeFalsy();
    expect(isFibonacci("2005/12/12")).toBeFalsy();
    expect(isFibonacci(true)).toBeFalsy();
    expect(isFibonacci(undefined)).toBeFalsy();
    expect(isFibonacci(null)).toBeFalsy();
    expect(isFibonacci(NaN)).toBeFalsy();
  });

  it('input of 10 or "10" returns false', () => {
    expect(isFibonacci(10)).toBeFalsy();
    expect(isFibonacci("10")).toBeFalsy();
  });

  it("input of a Fibonacci Number (1,2,3,5,8,13,21, or ...etc) returns true", () => {
    //only tests up to the 50th number
    expect(isFibonacci(2)).toBeTruthy();
    expect(isFibonacci(5)).toBeTruthy();
    expect(isFibonacci("13")).toBeTruthy();
    expect(isFibonacci(144)).toBeTruthy();
    expect(isFibonacci(6765)).toBeTruthy();
    expect(isFibonacci(12586269025)).toBeTruthy();
  });
});

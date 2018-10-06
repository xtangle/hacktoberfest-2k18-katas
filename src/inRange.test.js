import { inRange } from "./inRange";

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(inRange()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(inRange()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(inRange()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(inRange()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { inRange(); }).toThrow();
 */

describe("inRange", () => {
  it("should be true", () => {
    expect(inRange(5, 0, 10)).toBeTruthy();
  });

  it("should be false", () => {
    expect(inRange(0, 5, 10)).toBeFalsy();
  });

  it("should be true", () => {
    expect(inRange(5, 10)).toBeTruthy();
  });
});

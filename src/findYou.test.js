import { findYou } from "./findYou";

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(findYou()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(findYou()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(findYou()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(findYou()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { findYou(); }).toThrow();
 */

describe("findYou", () => {
  it("findYou found you", () => {
    expect(findYou("I love you")).toBeTruthy();
    expect(findYou("I love You")).toBeTruthy();
    expect(findYou("I love u")).toBeTruthy();
    expect(findYou("I love U")).toBeTruthy();
    expect(findYou({ iLove: "you" })).toBeTruthy();
    expect(findYou(["I", "love", "you"])).toBeTruthy();
    expect(findYou(true)).toBeTruthy();
  });

  it("findYou did not find you", () => {
    expect(findYou("I love Samantha")).toBeFalsy();
    expect(findYou("I love Youn")).toBeFalsy();
    expect(findYou("I love youth")).toBeFalsy();
    expect(findYou({ iLove: "notYou" })).toBeFalsy();
    expect(findYou(["I", "love", "who"])).toBeTruthy();
    expect(findYou(false)).toBeFalsy();
  });

  it("findYou with null", () => {
    expect(findYou(null)).toThrow("No way");
  });
});

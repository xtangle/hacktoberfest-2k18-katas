import { pascalTriangle } from "./pascalTriangle";

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(pascalTriangle()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(pascalTriangle()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(pascalTriangle()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(pascalTriangle()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { pascalTriangle(); }).toThrow();
 */

describe("pascalTriangle", () => {
  it("pascalTriangle returns row 0", () => {
    expect(pascalTriangle(0)).toEqual([[1]]);
  });

  it("pascalTriangle returns row 0 to 1 ", () => {
    expect(pascalTriangle(1)).toEqual([[1], [1, 1]]);
  });

  it("pascalTriangle returns row 0 to 2", () => {
    expect(pascalTriangle(2)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it("pascalTriangle returns row 0 to 7", () => {
    expect(pascalTriangle(7)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1]
    ]);
  });
});

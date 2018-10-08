import { reverseArray } from "./reverseArray";

describe("replaceChars", () => {
  it("Returns an array", () => {
    expect(reverseArray([])).toBe("array");
  });

  it("returns null if the arg is not an array", () => {
    expect(reverseArray(1)).toEqual(null);
  });
  it("Returns the array given as an arg in reverse", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray(["test", "TEST", "tEsT", "Test"])).toEqual([
      "Test",
      "tEsT",
      "TEST",
      "test"
    ]);
    expect(reverseArray([3, "test"])).toEqual(["test", 3]);
  });
});

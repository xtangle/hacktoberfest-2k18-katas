import { reverseArray } from "./reverseArray";

describe("replaceChars", () => {
  it("Returns an array", () => {
    expect(reverseArray([])).toBe("array");
  });

  it("returns null if the arg is not an array", () => {
    expect(reverseArray(1)).to.equal(null);
  });
  it("Returns the array given as an arg in reverse", () => {
    expect(reverseArray([1, 2, 3])).to.eql([3, 2, 1]);
    expect(reverseArray(["test", "TEST", "tEsT", "Test"])).to.eql([
      "Test",
      "tEsT",
      "TEST",
      "test"
    ]);
    expect(reverseArray([3, "test"])).to.eql(["test", 3]);
  });
});

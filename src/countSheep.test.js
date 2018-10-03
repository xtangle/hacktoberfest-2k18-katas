import { countSheep } from "./countSheep";

describe("countSheep", () => {
  it("return a number", () => {
    expect(typeof countSheep([1, 2, 3, 4, "sheep", 6])).toBe("number");
  });

  it("Should return the correct count of sheep", () => {
    expect(countSheep([2, 2, "sheep", 2])).toEqual(1);
    expect(countSheep(["Cow", 2, "sheep", "sheep"])).toEqual(2);
  });

  it("return 0 when the first argument is not an array", () => {
    expect(countSheep(2)).toEqual(0);
    expect(countSheep("sheep")).toEqual(0);
  });

  it("return 0 when no sheep are in the array", () => {
    expect(countSheep(["Tague", 3, null])).toEqual(0);
  });
});

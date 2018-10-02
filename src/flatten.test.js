import { flatten } from "./flatten";

describe("flatten", () => {
  it("flatten the array (1)", () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it("flatten the array (2)", () => {
    expect(flatten([1, [2, 3], [4, 5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

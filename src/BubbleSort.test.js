import { BubbleSort } from "./BubbleSort";

describe("BubbleSort", () => {
  it("Sort the following numbers using BubbleSort", () => {
    expect(BubbleSort([1, 4, 8, 7, 3, 2, 9, 5, 6])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });

  it("Sort the following numbers using BubbleSort", () => {
    expect(BubbleSort([9, 7, 5, 4, 3, 2])).toEqual([2, 3, 4, 5, 7, 9]);
  });

  it("Sort the following numbers using BubbleSort", () => {
    expect(BubbleSort([1, 2, 6, 8, 9, 4, 3, 7])).toEqual([
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ]);
  });
});

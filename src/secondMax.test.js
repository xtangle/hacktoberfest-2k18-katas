import { secondMax } from "./secondMax";

describe("secondMax", () => {
  it("gets the second highest value in the array", () => {
    expect(secondMax([1, 2, 3, 4, 5, 6])).toBe(5);
  });

  it("gets the second highest value in the array ignoring repetitions of the highest", () => {
    expect(secondMax([1, 2, 3, 4, 5, 6, 6])).toBe(5);
  });

  it("if the input is broken in some way, it returns null", () => {
    expect(secondMax([1, null, 3, 4, 5, 6, 6])).toBeNull();
    expect(secondMax([1, undefined, 3, 4, 5, 6, 6])).toBeNull();
    expect(secondMax([])).toBeNull();
    expect(secondMax(null)).toBeNull();
    expect(secondMax()).toBeNull();
  });
});

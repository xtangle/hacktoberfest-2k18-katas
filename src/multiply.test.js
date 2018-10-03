import { multiply } from "./multiply";

describe("multiply", () => {
  it("returns 0 when there are no value", () => {
    expect(multiply([])).toEqual(1);
  });

  it("returns the correct multiplication when there are values", () => {
    expect(multiply([1, 2, 3])).toEqual(6);
  });

  it("returns the correct multiplication when there are values", () => {
    expect(multiply([1, 2, 3, 4, 5])).toEqual(120);
  });
});

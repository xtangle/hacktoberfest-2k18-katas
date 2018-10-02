import { merge } from "./merge";

describe("merge", () => {
  it("returns null when no object provided", () => {
    expect(merge(null)).toBeNull();
  });

  it("returns an object when only one parameter is provided", () => {
    expect(merge({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it("returns a merged object when two objects provided", () => {
    expect(merge({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4
    });
  });

  it("returns a merged object with arrays as value when identical keys are provided", () => {
    expect(merge({ a: 1, b: 2 }, { a: 3, b: 4 })).toEqual({
      a: [1, 3],
      b: [2, 4]
    });
  });
});

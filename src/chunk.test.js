import { chunk } from "./chunk";

describe("chunk", () => {
  it("returns uniformly chunked array", () => {
    expect(chunk([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);
  });

  it("returns non-uniformly chunked array", () => {
    expect(chunk([1, 2, 3, 4], 3)).toStrictEqual([[1, 2, 3], [4]]);
  });

  it("returns empty array when chunk factor is null", () => {
    expect(chunk([1, 2], null)).toStrictEqual([]);
  });

  it("returns empty array when chunk factor is undefined", () => {
    expect(chunk([1, 2], undefined)).toStrictEqual([]);
  });

  it("returns empty array when chunk factor is string", () => {
    expect(chunk([1, 2], "null")).toStrictEqual([]);
  });

  it("returns empty array when chunk factor is floating point", () => {
    expect(chunk([1, 2], 3.4)).toStrictEqual([]);
  });

  it("returns empty array when chunk factor is NaN", () => {
    expect(chunk([1, 2], NaN)).toStrictEqual([]);
  });
});

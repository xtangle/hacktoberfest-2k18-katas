import { difference } from "./difference";

describe("difference", () => {
  it("returns empty array (first arg undefined)", () => {
    expect(difference(undefined, [12, 11, 4])).toEqual([]);
  });

  it("returns empty array (first arg null)", () => {
    expect(difference(null, [121, 12, 14])).toEqual([]);
  });

  it("return correct array", () => {
    expect(difference([12, 11, 4, 48], [2, null, 4], [undefined, 11])).toEqual([
      12,
      48
    ]);
  });
});

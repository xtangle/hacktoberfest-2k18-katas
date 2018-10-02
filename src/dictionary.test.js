import { dictionary } from "./dictionary";

describe("dictionary", () => {
  it("returns an object with the number of occurrences of the dictionary (1)", () => {
    expect(dictionary("i like hacktoberfest")).toEqual({
      i: 1,
      like: 1,
      hacktoberfest: 1
    });
  });

  it("returns an object with the number of occurrences of the dictionary (2)", () => {
    expect(dictionary("ding ding dong i'm the t-shirt delivery guy")).toEqual({
      ding: 2,
      dong: 1,
      "i'm": 1,
      the: 1,
      "t-shirt": 1,
      delivery: 1,
      guy: 1
    });
  });
});

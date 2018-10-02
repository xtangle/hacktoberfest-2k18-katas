import { convertIntToLetter } from "./convertIntToLetter";

describe("convertIntToLetter", () => {
  it("converts integer values to alphabet position", () => {
    expect(
      convertIntToLetter([7, 0, 2, 10, 19, 14, 1, 4, 17, 5, 4, 18, 19])
    ).toEqual("hacktoberfest");
  });
});

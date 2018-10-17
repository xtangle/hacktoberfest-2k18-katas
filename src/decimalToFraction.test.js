import { decimalToFraction } from "./decimalToFraction";

describe("decimalToFraction", () => {
  it("rounds down to whole number", () => {
    expect(decimalToFraction(2.02)).toEqual("2");
  });

  it("converts 1/16", () => {
    expect(decimalToFraction(2.0625)).toEqual("2 1/16");
  });

  it("converts 1/8", () => {
    expect(decimalToFraction(2.125)).toEqual("2 1/8");
  });

  it("converts 1/4", () => {
    expect(decimalToFraction(2.25)).toEqual("2 1/4");
  });

  it("converts 1/2", () => {
    expect(decimalToFraction(2.5)).toEqual("2 1/2");
  });

  it("rounds to the nearest 1/16th of an inch", () => {
    expect(decimalToFraction(2.05)).toEqual("2 1/16");
  });

  it("rounds up to whole number", () => {
    expect(decimalToFraction(2.98)).toEqual("3");
  });
});

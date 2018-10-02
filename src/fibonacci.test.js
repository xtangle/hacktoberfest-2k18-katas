import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
  it("returns the 2 first values of the Fibonacci numbers", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  it("returns the 3 first values of the Fibonacci numbers", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });

  it("returns the 7 first values of the Fibonacci numbers", () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  it("returns the 12 first values of the Fibonacci numbers", () => {
    expect(fibonacci(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
});

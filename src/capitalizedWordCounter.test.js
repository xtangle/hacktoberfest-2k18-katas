import { capitalizedWordCounter } from "./capitalizedWordCounter";

describe("capitalizedWordCounter", () => {
  it("capitalizedWordCounter counts capitalized words in sentence", () => {
    expect(capitalizedWordCounter("Hello World JavaScript")).toEqual(3);
  });

  it("capitalizedWordCounter counts capitalized words in sentence", () => {
    expect(capitalizedWordCounter("Hello world Javascript")).toEqual(2);
  });

  it("capitalizedWordCounter counts capitalized words in sentence", () => {
    expect(capitalizedWordCounter("hacktober 2018")).toEqual(0);
  });
});

import { findAnagram } from "./findAnagram";

describe("findAnagram", () => {
  test("returns dell and ledl", () => {
    expect(findAnagram(["dell", "ledl", "abc", "edcd"])).toEqual(["dell", "ledl"]);
  });
  
  test("returns dog and god", () => {
    expect(findAnagram(["bird", "dog", "fox", "god", "tiger"])).toEqual(["dog", "god"]);
  });
})
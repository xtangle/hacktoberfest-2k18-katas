import { findAnagarm } from "./findAnagram";

describe("findAnagarm", () => {
  test("returns dell and ledl", () => {
    expect(findAnagarm(["dell", "ledl", "abc", "edcd"])).toEqual(["dell", "ledl"]);
  });
  
  test("returns dog and god", () => {
    expect(findAnagarm(["bird", "dog", "fox", "god", "tiger"])).toEqual(["dog", "god"]);
  });
})
import { largestString } from './largestString';

describe('largestString', () => {
  it('returns the largest string aaa', () => {
    expect(largestString(["a", "aa", "aaa"])).toEqual(["aaa"]);
  });

  it('returns all the largest strings aaaa and 1234', () => {
    expect(largestString(["1234", "aa", "aaaa"])).toEqual(["aaaa", "1234"]);
  });

  it('returns an empty array when null', () => {
    expect(largestString(null)).toEqual([]);
  });

  it('returns the largest string Awesome', () => {
    expect(largestString(["I", "am", "Awesome"])).toEqual(["Awesome"]);
  });
})
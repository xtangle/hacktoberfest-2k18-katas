import { sortString } from './sortString';

describe('sortString', () => {
  it('should sort a string based on the array sort algorithm', () => {
    expect(sortString("PONMLKJIHGFEDCBA")).toEqual("ABCDEFGHIJKLMNOP");
    expect(sortString("ponmlkjihgfedcba")).toEqual("abcdefghijklmnop");
    expect(sortString("")).toEqual("");
    expect(sortString("Mary had a little lamb.")).toEqual(".Maaaabdehilllmrtty");
    expect(sortString("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toEqual(",.Laacccddeeeeegiiiiiillmmmnnoooopprrrsssstttttuu");
    expect(sortString("9876543210")).toEqual("9876543210");
  });
});

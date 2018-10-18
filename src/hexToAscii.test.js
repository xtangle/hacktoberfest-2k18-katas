import { hexToAscii } from './hexToAscii';

/*
 * Convert string of hex values to readable ASCII characters
 *
 */

describe('hexToAscii', () => {
  it('converts readable characters', () => {
    expect(hexToAscii("48 65 6c 6c 6f 20 77 6f 72 6c 64 21")).toEqual("Hello world!")
  });

  it('ignores unreadable characters', () => {
    expect(hexToAscii("1B 1c 1d")).toEqual("")
  });

  it('is case insensitive on the input', () => {
    expect(hexToAscii("68 61 63 6b 74 6f 62 65 72 66 65 73 74")).toEqual("hacktoberfest")
    expect(hexToAscii("68 61 63 6B 74 6F 62 65 72 66 65 73 74")).toEqual("hacktoberfest")
  });
});

import { lineCount } from './lineCount';

describe('lineCount', () => {
  it('should not count empty texts', () => {
    expect(lineCount('')).toEqual(0);
  });

  it('should not count anything that is not a text', () => {
    expect(lineCount(10)).toEqual(0);
  });

  it('should count a single line of text', () => {
    const text = 'This is just a single line';
    expect(lineCount(text)).toEqual(1);
  });

  it('should count multiple lines of text, including blank lines', () => {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    expect(lineCount(text)).toEqual(5);
  });
});

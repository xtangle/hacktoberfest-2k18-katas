import { isValidPalindrome } from './isValidPalindrome';

describe('isValidPalindrome', () => {
  it('Empty string will be an invalid string.', () => {
    expect(isValidPalindrome("")).toBeFalsy();
  });

  it('Handles valid input by returning Ture', () => {
    expect(isValidPalindrome("a")).toBeTruthy();
    expect(isValidPalindrome("aba")).toBeTruthy();
    expect(isValidPalindrome("abba")).toBeTruthy();
    expect(isValidPalindrome("  abba")).toBeTruthy();
  });

  it('Handles invalid input by returning False', () => {
    expect(isValidPalindrome("abb")).toBeFalsy();
    expect(isValidPalindrome(" abb")).toBeFalsy();
  });
});

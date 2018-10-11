import { isValidPalindrome } from './isValidPalindrome';

describe('isValidPalindrome', () => {
  it('Empty string will be an invalid string.', () => {
    expect(isValidParentheses("")).toBeFalsy();
  });

  it('Handles valid input by returning Ture', () => {
    expect(isValidParentheses("a")).toBeTruthy();
    expect(isValidParentheses("aba")).toBeTruthy();
    expect(isValidParentheses("abba")).toBeTruthy();
    expect(isValidParentheses("  abba")).toBeTruthy();
  });

  it('Handles invalid input by returning False', () => {
    expect(isValidParentheses("abb")).toBeFalsy();
    expect(isValidParentheses(" abb")).toBeFalsy();
  });
});

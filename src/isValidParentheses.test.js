import { isValidParentheses } from './isValidParentheses';

describe('isValidParentheses', () => {
  it('Empty string will be an invalid string.', () => {
    expect(isValidParentheses("")).toBeFalsy();
  });

  it("a string containing just the characters '(', ')', '{', '}', '[' and ']'", () => {
    expect(isValidParentheses("abcdefg")).toBeFalsy();
    expect(isValidParentheses("234123")).toBeFalsy();
  });

  it('Handles valid input by returning Ture', () => {
    expect(isValidParentheses("()")).toBeTruthy();
    expect(isValidParentheses("{[]}")).toBeTruthy();
    expect(isValidParentheses("()[]{}")).toBeTruthy();
  });

  it('Handles invalid input by returning False', () => {
    expect(isValidParentheses("(]")).toBeFalsy();
    expect(isValidParentheses("([)]")).toBeFalsy();
  });
});

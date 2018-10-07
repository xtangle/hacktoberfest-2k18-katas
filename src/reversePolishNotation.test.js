import { reversePolishNotation } from './reversePolishNotation';

describe('reversePolishNotation', () => {
  it('evaluates infix to postfix', () => {
    expect(reversePolishNotation("x^y/(5*z)+10")).toEqual("xy^5z*/10+");
    expect(reversePolishNotation("a+b-c/(a-b*e)/a*c")).toEqual("ab+cabe*-/a/c*-")
    expect(reversePolishNotation("a+b-c*d/e")).toEqual("ab+cd*e/-")
  });
});

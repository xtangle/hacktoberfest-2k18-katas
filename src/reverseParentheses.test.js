import { reverseParentheses } from './reverseParentheses';


describe('reverseParentheses', () => {
  
  it('reverses the sub-string inside of a parentheses', () => {
    let string = "a(bc)de";
    expect(reverseParentheses(string)).toBe('acbde');
  });

  it('reverses all instances of parentheses pairs, the resulting string does not have a parentheses', () => {
    expect(reverseParentheses("abc(cba)ab(bac)c")).toBe("abcabcabcabc")
  })

  it('returns the same string without modification if no parentheses inside the input string', () => {
    expect(reverseParentheses('acbde')).toBe('acbde');
    expect(reverseParentheses("Where are the parentheses?")).toBe("Where are the parentheses?");
    });

  it('reverses the sub-strings properly (starting from the inside most parentheses pair)', () => {
    let s = "a(bcdefghijkl(mno)p)q";
    expect(reverseParentheses(s)).toBe("apmnolkjihgfedcbq");
  });

});

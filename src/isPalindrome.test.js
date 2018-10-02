import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('return true when a string is a palindrome (1)', () => {
    expect(isPalindrome('Step on no pets')).toBeTruthy();
  });

  it('return true when a string is a palindrome (2)', () => {
    expect(isPalindrome('This is not palindrome!')).toBeFalsy();
  });

  it('return true when a string is a palindrome (3)', () => {
    expect(isPalindrome('aaBbCBBAa')).toBeTruthy();
  });
})
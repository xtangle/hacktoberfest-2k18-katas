import {
  isValidAnagram
} from './isValidAnagram';

describe('isValidAnagram', () => {
  it('Passed several valid cases.', () => {
    expect(isValidAnagram("anagram", "nagaram")).toBeTruthy();
    expect(isValidAnagram("cinema", "iceman")).toBeTruthy();
    expect(isValidAnagram("apple", "pepla")).toBeTruthy();
  });

  it('Passed several invalid cases. ', () => {
    expect(isValidAnagram("rat", "cat")).toBeFalsy();
    expect(isValidAnagram("pad", "dad")).toBeFalsy();
    expect(isValidAnagram("apple", "eleen")).toBeFalsy();
  });
});

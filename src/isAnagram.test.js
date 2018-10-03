import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
  it('cat and act are anagrams', () => {
    expect(isAnagram("cat", "act")).toBeTruthy();
  });

  it('owl and low are anagrams', () => {
    expect(isAnagram("owl", "low")).toBeTruthy();
  });
  
  it('triangle and triangle are anagrams', () => {
    expect(isAnagram("triangle", "triangle")).toBeTruthy();
  });
  
  it('buster and bus are not anagrams', () => {
    expect(isAnagram("buster", "bus")).toBeTruthy();
  });
})

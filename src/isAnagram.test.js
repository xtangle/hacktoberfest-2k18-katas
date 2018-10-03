import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
  it('cat and act are anagrams', () => {
    expect(isAnagran("cat", "act")).toBeTruthy(); // TODO Your test instead
  });

  it('owl and low are anagrams', () => {
    expect(isAnagran("owl", "low")).toBeTruthy(); // TODO Your test instead
  });
  
  it('triangle and triangle are anagrams', () => {
    expect(isAnagran("triangle", "triangle")).toBeTruthy(); // TODO Your test instead
  });
  
  it('buster and bus are not anagrams', () => {
    expect(isAnagran("buster", "bus")).toBeTruthy(); // TODO Your test instead
  });
})

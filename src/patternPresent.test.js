import { patternPresent } from './patternPresent';

describe('patternPresent', () => {
  it('should return null if any of the arguments are not strings, or are empty strings', () => {
    expect(patternPresent()).toBeNull();
    expect(patternPresent('')).toBeNull();
    expect(patternPresent('', '')).toBeNull();
    expect(patternPresent(1, '')).toBeNull();
    expect(patternPresent(1, 1)).toBeNull();
    expect(patternPresent(['foo'], ['bar'])).toBeNull();
    expect(patternPresent('', null)).toBeNull();
    expect(patternPresent(undefined, '')).toBeNull();
  });

  it('should return true if the given pattern is present in the given string', () => {
    expect(patternPresent('abcdefg', 'efg')).toBe(true);
    expect(patternPresent('0123abc', '3ab')).toBe(true);
    expect(patternPresent('a', 'a')).toBe(true);
  });

  it('should return false if the given pattern is absent in the given string', () => {
    expect(patternPresent('abcdefg', 'eag')).toBe(false);
    expect(patternPresent('0123abc', 'cba3210')).toBe(false);
    expect(patternPresent('a', '1')).toBe(false);
  });
});

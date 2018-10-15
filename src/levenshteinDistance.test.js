import { levenshteinDistance } from './levenshteinDistance';

describe('levenshteinDistance', () => {
  test('should return Levenshtein distance', () => {
    expect(levenshteinDistance('H', 'H')).toEqual(0);
    expect(levenshteinDistance('H', 'K')).toEqual(1);
    expect(levenshteinDistance('test', ' tent')).toEqual(1);
    expect(levenshteinDistance('kitten', ' sitting')).toEqual(3);
  });

  test('should throws error when first argument is not a string', () => {
    expect(() => levenshteinDistance(2, 'a')).toThrow();
    expect(() => levenshteinDistance([], 'a')).toThrow();
    expect(() => levenshteinDistance({}, 'a')).toThrow();
    expect(() => levenshteinDistance(null, 'a')).toThrow();
    expect(() => levenshteinDistance(false, 'a')).toThrow();
    expect(() => levenshteinDistance(true, 'a')).toThrow();
    expect(() => levenshteinDistance(undefined, 'a')).toThrow();
    expect(() => levenshteinDistance(NaN, 'a')).toThrow();
  });

  test('should throws error when second argument is not an string', () => {
    expect(() => levenshteinDistance('a', 1)).toThrow();
    expect(() => levenshteinDistance('a', {})).toThrow();
    expect(() => levenshteinDistance('a', '')).toThrow();
    expect(() => levenshteinDistance('a', null)).toThrow();
    expect(() => levenshteinDistance('a', false)).toThrow();
    expect(() => levenshteinDistance('a', true)).toThrow();
    expect(() => levenshteinDistance('a', undefined)).toThrow();
    expect(() => levenshteinDistance('a', NaN)).toThrow();
    expect(() => levenshteinDistance('a', 2.5)).toThrow();
  });
});

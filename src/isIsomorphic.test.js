import { isIsomorphic } from './isIsomorphic';

describe('isIsomorphic', () => {
  it('should return null if any of the arguments are not (not empty) strings', () => {
    expect(isIsomorphic()).toBeNull();
    expect(isIsomorphic('')).toBeNull();
    expect(isIsomorphic('', '')).toBeNull();
    expect(isIsomorphic(1, '')).toBeNull();
    expect(isIsomorphic(1, 1)).toBeNull();
    expect(isIsomorphic(['foo'], ['bar'])).toBeNull();
    expect(isIsomorphic('', null)).toBeNull();
    expect(isIsomorphic(undefined, '')).toBeNull();
  });

  it('should return true if the strings are isomorphic', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
    expect(isIsomorphic('good', 'deer')).toBe(true);
  });

  it('should return false if the strings are not isomorphic', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });
});

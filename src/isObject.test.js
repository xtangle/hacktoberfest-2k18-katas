import { isObject } from './isObject';

describe('isObject', () => {
  it('returns true for plain objects', () => {
    expect(isObject({})).toEqual(true);
  });

  it('returns false for null', () => {
    expect(isObject(null)).toEqual(false);
  });

  it('returns true for functions', () => {
    const func = () => {};
    expect(isObject(func)).toEqual(true);
  });

  it('returns false for strings', () => {
    expect(isObject("yo")).toEqual(false);
  });

  it('returns false for undefined', () => {
    expect(isObject(undefined)).toEqual(false);
  });

  it('returns false for numbers', () => {
    expect(isObject(42)).toEqual(false);
  });

  it('returns true for arrays', () => {
    expect(isObject([])).toEqual(true);
  });
})

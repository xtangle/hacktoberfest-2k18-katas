import { isComposite } from './isComposite.js';

describe('toSnakeCase', () => {
  it('5 is not a composite number', () => {
    expect(isComposite(5)).toBeFalsy();
  });

  it('12 is a composite number', () => {
    expect(isComposite(12)).toBeTruthy();
  });

  it('94742 is a composite number', () => {
    expect(isComposite(94742)).toBeTruthy();
  });

  it('71 is not a composite number', () => {
    expect(isComposite(71)).toBeFalsy();
  });

  it('return null when not a number', () => {
    expect(() => isComposite("abc")).toBeNull();
    expect(() => isComposite(null)).toBeNull();
    expect(() => isComposite([])).toBeNull();
    expect(() => isComposite({})).toBeNull();
    expect(() => isComposite(new Date())).toBeNull();
    expect(() => isComposite(NaN)).toBeNull();
  });
})
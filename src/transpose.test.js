import { transpose } from './transpose';

describe('transpose', () => {
  it('should transpose a matrix', () => {
    expect(transpose([[1, 2]])).toBe([[1], [2]]);
    expect(transpose([[1, 2], [3, 4]])).toBe([[1, 3], [2, 4]]);
    expect(transpose([[1, 2], [3, 4], [5, 6]])).toBe([[1, 3, 5], [2, 4, 6]]);
  });

  it('should throw if the input is not an array of array(s)', () => {
    expect(() => transpose([])).toThrow();
    expect(() => transpose()).toThrow();
    expect(() => transpose({})).toThrow();
    expect(() => transpose(null)).toThrow();
    expect(() => transpose(undefined)).toThrow();
    expect(() => transpose('foo')).toThrow();
    expect(() => transpose(1)).toThrow();
  });
});

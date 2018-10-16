import { shellSort } from './shellSort';

describe('shellSort', () => {
  it('should sort an array of numbers', () => {
    expect(shellSort([34, 22, 18, 95, 3, 5, 29, 7])).toEqual([3, 5, 7, 18, 22, 29, 34, 95]);
    expect(shellSort([23, -5, 4, 10, 56, 21])).toEqual([-5, 4, 10, 21, 23, 56]);
  });

  it('should throw if the input is not a non-empty number array', () => {
    expect(() => shellSort('')).toThrow();
    expect(() => shellSort(null)).toThrow();
    expect(() => shellSort(undefined)).toThrow();
    expect(() => shellSort([])).toThrow();
  });
});

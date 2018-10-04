import { median } from './median';

describe('median', () => {
  it('returns the median of positive numbers', () => {
    expect(median([900, '1', 88.2, 4, 9, '100', 56, 44, 23, 345])).toEqual(50);
  });

  it('returns the median of negative numbers', () => {
    expect(median([40, -3, 88.4, '-2', 5, -90, -90])).toEqual(-2);
  });

  it('returns null if the array is empty', () => {
    expect(median([])).toBeNull();
  });

  it('returns null if null is passed as an argument', () => {
    expect(median(null)).toBeNull();
  });

  it('returns null if the array contains anything but strings or numbers', () => {
    expect(median([1, 2, { a: 0}])).toBeNull();
  });
})
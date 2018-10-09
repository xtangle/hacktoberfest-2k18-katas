import { quickSort } from './quickSort';

describe('quickSort', () => {
  it('quickSort returns a sorted array', () => {
    expect(quickSort([1, 5, 3, 8, 7, 6])).toEqual([1, 3, 5, 6, 7, 8]);
  });

  it('quickSort returns a sorted array', () => {
    expect(quickSort([-2, 3, 1, -1, 0, 7, 4])).toEqual([-2, -1, 0, 1, 3, 4, 7]);
  });

  it('quickSort returns empty array if array length is 0', () => {
    expect(quickSort([])).toEqual([]);
  });
});

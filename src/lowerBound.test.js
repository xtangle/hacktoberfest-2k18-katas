import { lowerBound } from './lowerBound';

describe('lowerBound', () => {
  it('finds the first element greater than search key', () => {
    let arr = [1, 2, 3, 4, 5];

    expect(lowerBound(arr, 0)).toEqual(0);
    expect(lowerBound(arr, 1)).toEqual(1);
    expect(lowerBound(arr, 2)).toEqual(2);
    expect(lowerBound(arr, 3)).toEqual(3);
    expect(lowerBound(arr, 4)).toEqual(4);
    expect(lowerBound(arr, 5)).toEqual(5);
    expect(lowerBound(arr, 6)).toEqual(5);
  });

  it('ignores duplicate values', () => {
    let duplicates = [1, 1, 2, 2, 3, 3];

    expect(lowerBound(duplicates, 1)).toEqual(2);
    expect(lowerBound(duplicates, 2)).toEqual(4);
    expect(lowerBound(duplicates, 3)).toEqual(6);
  });
});

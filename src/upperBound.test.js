import { upperBound } from './upperBound';

describe('upperBound', () => {
  it('finds the first element greater than search key', () => {
    let arr = [1, 2, 3, 4, 5];

    expect(upperBound(arr, 0)).toEqual(0);
    expect(upperBound(arr, 1)).toEqual(1);
    expect(upperBound(arr, 2)).toEqual(2);
    expect(upperBound(arr, 3)).toEqual(3);
    expect(upperBound(arr, 4)).toEqual(4);
    expect(upperBound(arr, 5)).toEqual(5);
    expect(upperBound(arr, 6)).toEqual(5);
  });

  it('ignores duplicate values', () => {
    let duplicates = [1, 1, 2, 2, 3, 3];

    expect(upperBound(duplicates, 1)).toEqual(2);
    expect(upperBound(duplicates, 2)).toEqual(4);
    expect(upperBound(duplicates, 3)).toEqual(6);
  });
});

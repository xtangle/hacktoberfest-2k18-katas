import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('should find the index for element in array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5)).toEqual(4);
  });
  it('should return -1 if element not in array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 50)).toEqual(-1);
  });
});

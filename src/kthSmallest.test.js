import { kthSmallest } from './kthSmallest';

describe('kthSmallest', () => {
  it('should find the Kth smallest number from an unsorted array', () => {
    expect(kthSmallest([7, 10, 4, 3, 20, 15], 3)).toEqual(7); // should pass once function is written!
    expect(kthSmallest([7, 10, 4, 3, 20, 15], 4)).toEqual(10); // should pass once function is written!
    // add your own tests also!
  });

  it('should return null when k is undefined or null', () => {
    expect(kthSmallest([1, 3, 2])).toEqual(null);
    expect(kthSmallest([1, 3, 2], null)).toEqual(null);
  });

  it('should return null when array is empty', () => {
    expect(kthSmallest([], 3)).toEqual(null);
  });
})
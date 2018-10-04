import { kthSmallest } from './kthSmallest';

describe('kthSmallest', () => {
  it('should find the Kth smallest number from an unsorted array', () => {
    expect(kthSmallest([7, 10, 4, 3, 20, 15], 3)).toEqual(7); // should pass once function is written!
    expect(kthSmallest([7, 10, 4, 3, 20, 15], 4)).toEqual(10); // should pass once function is written!
    // add your own tests also!
  });
})
import { heapSort } from './heapSort';


describe('heapSort', () => {
  it('returns ordered from input array using heapSort', () => {
    const ordered = heapSort([1,7,3,9,2,4,5,0,8]);
    expect(ordered).toStrictEqual([0,1,2,3,4,5,7,8,9]);
  });
});

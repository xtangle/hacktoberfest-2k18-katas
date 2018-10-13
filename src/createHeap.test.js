import { createHeap } from './createHeap';


describe('createHeap', () => {
  it('returns createHeap from input array', () => {
    const h = createHeap([1,7,3,9,2,4,5,0,8]);
    expect(h.pop()).toStrictEqual(0);
    expect(h.pop()).toStrictEqual(1);
  });
});

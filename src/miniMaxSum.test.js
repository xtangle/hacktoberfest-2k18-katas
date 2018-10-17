import { miniMaxSum } from './miniMaxSum';

describe('miniMaxSum', () => {
  it('miniMaxSum returns null if array given is empty', () => {
    expect(miniMaxSum([])).toBeNull();
  });
  it('miniMaxSum returns null if array given contains elements that are not integers', () => {
    expect(miniMaxSum([1, 7, 2, 'a', 9, -1])).toBeNull();
  });
  it('miniMaxSum calculations', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
    expect(miniMaxSum([94, 62, 59, 18, 57, 92, 12, 19, 3, 28])).toEqual([350, 441]);
    expect(miniMaxSum([58, 72, 30, 90, 0, 28, 44, 37, 97, 62])).toEqual([421, 518]);
  });
});

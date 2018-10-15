import { minMaxSum } from './minMaxSum';

describe('minMaxSum', () => {
  it('minMaxSum returns null if array given is empty', () => {
    expect(minMaxSum([])).toBeNull();
  });
  it('minMaxSum returns null if array given contains elements that are not integers', () => {
    expect(minMaxSum([1, 7, 2, 'a', 9, -1])).toBeNull();
  });
  it('minMaxSum returns null if array given has a length of 1', () => {
    expect(minMaxSum([5])).toBeNull();
  });
  it('minMaxSum returns the sum of the smallest and largest numbers in an array', () => {
    expect(minMaxSum([4, 3, 2, 1, 6, 4, 8, 7])).toEqual(9);
    expect(minMaxSum([10, 6, 23, 7, 12, -4, 0, -12])).toEqual(-13);
    expect(minMaxSum([-1, -5, -20, -6, -9])).toEqual(-12);
  });
});

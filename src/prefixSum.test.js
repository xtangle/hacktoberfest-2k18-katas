import { prefixSum } from './prefixSum';

describe('prefixSum', () => {
  it('returns empty array on empty array', () => {
    expect(prefixSum([])).toEqual([]);
  });

  it('sums items properly', () => {
    expect(prefixSum([1])).toEqual(1);
    expect(prefixSum([1, 0, 1, 1, 0])).toEqual([1, 1, 2, 3, 3]);
    expect(prefixSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(prefixSum([1, 2, 3, 4, 5])).toEqual([1, 3, 6, 10, 15]);
    expect(prefixSum([1, 3, -1, 0, -3])).toEqual([1, 4, 3, 3, 0]);
  });

  it('works with other commutative functions', () => {
    expect(prefixSum([1, 1, 1, 1, 1], (a, b) => (a * b))).toEqual([1, 1, 1, 1, 1]);
    expect(prefixSum([1, 2, 3, 4, 5], (a, b) => (a * b))).toEqual([1, 2, 6, 24, 120]);
    expect(prefixSum([1, 2, 3, 0, 5], (a, b) => (a * b))).toEqual([1, 2, 6, 0, 0]);
    expect(prefixSum([1, 2, 3, 4, 5], (a, b) => (a | b))).toEqual([1, 3, 3, 7, 7]);
    expect(prefixSum([1, 2, 3, 4, 5], (a, b) => (a ^ b))).toEqual([1, 3, 0, 4, 1]);
  });
});

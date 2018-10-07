import { intersection } from './intersection';

describe('intersection', () => {
  
  it('compares input arrays and returns a new array with elements found in all of the inputs', () => {
    expect(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7, 20], [1, 10, 15, 5, 20])).toEqual([5, 15, 20]);
  });

  it('returns an empty array if no common elements in the input arrays', () => {
    expect(intersection([1, 2, 5], [3, 4])).toEqual([]);
  });

  it('returns emtpy array if all input arrays are empty', () => {
    expect(intersection([], [])).toEqual([]);
    expect(intersection([], [], [])).toEqual([]);
  })
  
  it('returns an empty array if number of arrays provided is less than two', () => {
    expect(intersection([])).toEqual([]);
    expect(intersection([1, 2, 3, 4])).toEqual([]);
  })
})
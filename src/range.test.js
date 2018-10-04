import { range } from './range';

describe('range', () => {
  it('returns the range of positive numbers', () => {
    expect(range([3, 5, 4, 4, 1, 1, 2, 3])).toEqual([1, 5])
  });

  it('returns the range of negative numbers', () => {
    expect(range([40, -3, 90, -2, 5, -90, -90])).toEqual([-90, 90]);
  });

  it('returns null if the array is empty', () => {
    expect(range([])).toBeNull();
  });

  it('returns null if null is passed as an argument', () => {
    expect(range(null)).toBeNull();
  });

  it('returns the range with just a single number', () => {
    expect(range([10])).toEqual([10, 10]);
  })
})

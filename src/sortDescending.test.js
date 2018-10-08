import { sortDescending } from './sortDescending';

describe('sortDescending', () => {
  it('returns -1 if argument is invalid', () => {
    expect(sortDescending([])).toEqual(-1);
    expect(sortDescending({})).toEqual(-1);
    expect(sortDescending(undefined)).toEqual(-1);
    expect(sortDescending(null)).toEqual(-1);
    expect(sortDescending(NaN)).toEqual(-1);
    expect(sortDescending(1)).toEqual(-1);
    expect(sortDescending('Foo')).toEqual(-1);
  });

  it('returns sorted array in descending order', () => {
    expect(sortDescending([3, 4, 1, 2])).toEqual([4, 3, 2, 1]);
    expect(sortDescending([34, 1, 23, 3])).toEqual([34, 23, 3, 1]);
  });

  it('returns sorted array with repeating values in descending order', () => {
    expect(sortDescending([1, 3, 3, 2, 5])).toEqual([5, 3, 3, 2, 1]);
  });
})

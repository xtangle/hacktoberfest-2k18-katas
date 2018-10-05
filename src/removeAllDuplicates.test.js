import { removeAllDuplicates } from './removeAllDuplicates';

describe('removeAllDuplicates', () => {
  it('removes all duplicates', () => {
    expect(removeAllDuplicates([1, 4, 6, 4, 2, 7, 9, 6, 4, 2, 3, 5])).toEqual([1, 4, 6, 2, 7, 9, 3, 5]);
  });
  it('empty array returns empty array', () => {
    expect(removeAllDuplicates([])).toEqual([]);
  });
  it('array with no duplicates returns original array', () => {
    expect(removeAllDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('returns null for invalid input', () => {
    expect(removeAllDuplicates()).toEqual(null);
    expect(removeAllDuplicates(3)).toEqual(null);
    expect(removeAllDuplicates("foo")).toEqual(null);
    expect(removeAllDuplicates({ bar: "baz" })).toEqual(null);
    expect(removeAllDuplicates(undefined)).toEqual(null);
    expect(removeAllDuplicates(null)).toEqual(null);
    expect(removeAllDuplicates(true)).toEqual(null);
  });
});

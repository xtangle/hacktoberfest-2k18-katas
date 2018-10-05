import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('removes all duplicates', () => {
    expect(removeDuplicates([1, 4, 6, 4, 2, 7, 9, 6, 4, 2, 3, 5])).toEqual([1, 4, 6, 2, 7, 9, 3, 5]);
  });
  it('empty array returns empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
  it('array with no duplicates returns original array', () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('returns null for invalid input', () => {
    expect(removeDuplicates()).toEqual(null);
    expect(removeDuplicates(3)).toEqual(null);
    expect(removeDuplicates("foo")).toEqual(null);
    expect(removeDuplicates({ bar: "baz" })).toEqual(null);
    expect(removeDuplicates(undefined)).toEqual(null);
    expect(removeDuplicates(null)).toEqual(null);
    expect(removeDuplicates(true)).toEqual(null);
  });
});

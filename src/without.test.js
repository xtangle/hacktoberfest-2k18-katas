import { without } from './without';

/*
 * Creates an array excluding all given values
 */

describe('without', () => {
  it('works', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([2, 1, 4, 2, 3, 5, 6, 2], 1, 2)).toEqual([4, 3, 5, 6]);
    expect(without([2, 1, 4, 2, 3, 5, 6, 2], 7)).toEqual([2, 1, 4, 2, 3, 5, 6, 2]);
  });
  it('returns the same array if nothing passed', () => {
    expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
  });
  it('throws error if no array passed', () => {
    expect(() => without(1)).toThrowError()
  });
});
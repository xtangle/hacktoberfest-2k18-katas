import { removeUnique } from './removeUnique';

describe('removeUnique', () => {
  it('remove all unique elements', () => {
    expect(removeUnique([1, 3, 5, 1, 5, 7])).toEqual([1, 5, 1, 5]);
  });

  it('remove all unique elements', () => {
    expect(removeUnique([1, 3, 5, 1, 5, 3])).toEqual([1, 3, 5, 1, 5, 3]);
  });

  it('remove all unique elements', () => {
    expect(removeUnique([])).toEqual([]);
  });

  it('remove consecutive duplicates', () => {
    expect(removeUnique([1, 2, 3])).toEqual([]);
  });
})
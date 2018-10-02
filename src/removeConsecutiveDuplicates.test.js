import { removeConsecutiveDuplicates } from './removeConsecutiveDuplicates';

describe('removeConsecutiveDuplicates', () => {
  it('remove consecutive duplicates', () => {
    const initialArray = [1, 2, 3, 3, 3, 2, 1, 1, 3, 2, 2, 2, 1];
    expect(removeConsecutiveDuplicates(initialArray)).toEqual([1, 2, 3, 2, 1, 3, 2, 1]);
  });
  it('remove consecutive duplicates', () => {
    expect(removeConsecutiveDuplicates([])).toEqual([]);
  });
  it('remove consecutive duplicates', () => {
    expect(removeConsecutiveDuplicates([5])).toEqual([5]);
  });
});

import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('removes duplicate strings from an array', () => {
    expect(removeDuplicates(['John', 'John', 'Jane'])).toEqual(['John', 'Jane']);
  });

  it('removes duplicate numbers from an array', () => {
    expect(removeDuplicates([1, 1, 2, 3])).toEqual([1, 2, 3]);
  });
})

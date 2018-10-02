import { sort } from './sort';

describe('sort', () => {
  it('return 0 if array is not numbers', () => {
    expect(sort('Foo')).toEqual(0);
  });

  it('return sorted array in ascending order', () => {
    expect(sort([3, 4, 1, 2])).toEqual([1, 2, 3, 4]);
  });

  it('return sorted array in ascending order', () => {
    expect(sort([1, 3, 3, 2, 5])).toEqual([1, 2, 3, 3, 5]);
  });
})

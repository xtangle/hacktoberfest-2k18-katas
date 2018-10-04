import { fill } from './fill';

describe('fill', () => {
  it('fills correctly', () => {
    expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
  });

  it('returns empty array if undefined passed as arg ', () => {
    expect(fill(undefined, 'a')).toEqual([]);
  });

  it('returns empty array if null passed as arg ', () => {
    expect(fill(undefined, 'a')).toEqual([]);
  });

  it('fills an array instance', () => {
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
  });

  it('Takes start and end args and fills correctly', () => {
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
  });
});

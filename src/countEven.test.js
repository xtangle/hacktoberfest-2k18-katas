import { countEven } from './countEven';

describe('countEven', () => {
  it('returns 0 when given empty array', () => {
    expect(countEven([])).toEqual(0);
  });

  it('returns 0 when no array is passed', () => {
    expect(countEven(null)).toEqual(0);
  });

  it('returns correct number of even numbers', () => {
    expect(countEven([4, 1, 31, 15, 16])).toEqual(2);
  });

  it('returns 0 when giving no even numbers', () => {
    expect(countEven([5, 7, 9, 11])).toEqual(0);
  });

  it('returns correct number of even numbers', () => {
    expect(countEven([2, 4, 6, 10])).toEqual(4);
  });
})
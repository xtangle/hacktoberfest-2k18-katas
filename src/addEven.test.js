import { addEven } from './addEven';

describe('addEven', () => {
  it('returns correct sum of even numbers', () => {
    expect(addEven([1, 2, 3, 4, 5, 6, 7])).toEqual(12);
    expect(addEven([124, 15, 12])).toEqual(136);
  });

  it('returns 0 for an array of odd numbers', () => {
    expect(addEven([1, 3, 5, 7, 9])).toEqual(0);
    expect(addEven([77, 23, 13, 129, 5])).toEqual(0);
  });

  it('handle invalid values by returning -1', () => {
    expect(addEven([])).toEqual(-1);
    expect(addEven({})).toEqual(-1);
    expect(addEven(undefined)).toEqual(-1);
    expect(addEven(null)).toEqual(-1);
    expect(addEven(NaN)).toEqual(-1);
    expect(addEven(1)).toEqual(-1);
    expect(addEven(2)).toEqual(-1);
  });
});

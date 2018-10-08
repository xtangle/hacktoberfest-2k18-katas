import { addOdd } from './addOdd';

describe('addOdd', () => {
  it('returns correct sum of odd numbers', () => {
    expect(addOdd([1, 2, 3, 4, 5, 6, 7])).toEqual(16);
    expect(addOdd([123, 15, 12])).toEqual(138);
  });

  it('returns 0 for an array of even numbers', () => {
    expect(addOdd([2, 4, 6, 8, 10])).toEqual(0);
    expect(addOdd([42, 56, 70, 122, 2])).toEqual(0);
  });

  it('handle invalid values by returning -1', () => {
    expect(addOdd([])).toEqual(-1);
    expect(addOdd({})).toEqual(-1);
    expect(addOdd(undefined)).toEqual(-1);
    expect(addOdd(null)).toEqual(-1);
    expect(addOdd(NaN)).toEqual(-1);
    expect(addOdd(1)).toEqual(-1);
    expect(addOdd(2)).toEqual(-1);
  });
});

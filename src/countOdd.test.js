import { countOdd } from './countOdd';

describe('countOdd', () => {
  it('return the correct number of odd numbers', () => {
    expect(countOdd([1, 2, 3, 4, 5, 6])).toEqual(3);
  });

  it('return 0 when there are no odd numbers', () => {
    expect(countOdd([2, 2, 2, 2])).toEqual(0);
  });

  it('return 0 when there are no numbers', () => {
    expect(countOdd([])).toEqual(0);
  });

  it('return 0 when no array is passed', () => {
    expect(countOdd(null)).toEqual(0);
  });
});

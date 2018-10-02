import { max } from './max';

describe('max', () => {
  it('return the max of positive numbers', () => {
    expect(max([1, 2, 3, 1000])).toEqual(1000);
  });

  it('return the max of negative numbers', () => {
    expect(max([-1, 10, -100, 5])).toEqual(10);
  });

  it('return null if there are no number in the array', () => {
    expect(max([])).toEqual(null);
  });

  it('return null if there are no array', () => {
    expect(max(null)).toEqual(null);
  });
});

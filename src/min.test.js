import { min } from './min';

describe('min', () => {
  it('return the min of positive numbers', () => {
    expect(min([1, 2, 3, 1000])).toEqual(1);
  });

  it('return the min of negative numbers', () => {
    expect(min([-1, 10, -100, 5])).toEqual(-100);
  });

  it('return null if there are no number in the array', () => {
    expect(min([])).toEqual(null);
  });

  it('return null if there are no array', () => {
    expect(min(null)).toEqual(null);
  });
});

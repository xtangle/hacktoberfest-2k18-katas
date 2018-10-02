import { min } from './min';

describe('min', () => {
  it('return 0 if there array is empty', () => {
    expect(min([])).toEqual(0);
  });

  it('return null if there are no array', () => {
    expect(min(null)).toEqual(null);
  });
  it('return the min of positive numbers', () => {
    expect(min([1, 2, 3, 5])).toEqual(5);
  });

  it('return the min of negative numbers', () => {
    expect(min([-1, -10, -100, -1000])).toEqual(-1000);
  });
});

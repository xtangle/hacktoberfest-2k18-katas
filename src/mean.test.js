import { mean } from './mean';

describe('mean', () => {
  it('return the mean of positive numbers', () => {
    expect(mean([0, 100, 900, 1000])).toEqual(500);
  });

  it('return the mean of negative numbers', () => {
    expect(mean([-500, 500, 200, -100])).toEqual(25);
  });

  it('return null if there are no number in the array', () => {
    expect(mean([])).toEqual(null);
  });

  it('return null if there are no array', () => {
    expect(mean(null)).toEqual(null);
  });
});

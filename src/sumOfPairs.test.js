import { sumOfPairs } from './sumOfPairs';

describe('sumOfPairs', () => {
  it('goes from 0 to 6', () => {
    expect(sumOfPairs([0,6])).toEqual(12);
  });

  it('goes from 0 to 10', () => {
    expect(sumOfPairs([0,10])).toEqual(30);
  });

  it('goes from 5 to 15', () => {
    expect(sumOfPairs([5,15])).toEqual(50);
  });

  it('goes from 90 to 160', () => {
    expect(sumOfPairs([90,160])).toEqual(4500);
  });
})
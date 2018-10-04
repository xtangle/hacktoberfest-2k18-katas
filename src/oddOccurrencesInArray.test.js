import { oddOccurrencesInArray } from './oddOccurrencesInArray';

describe('OddOccurrencesInArray', () => {
  it('whould find 3', () => {
    expect(oddOccurrencesInArray([1,2,3,2,1])).toEqual(3);
  });

  it('should find 7, array with two equals pairs', () => {
    expect(oddOccurrencesInArray([9,3,9,3,9,7,9])).toEqual(7);
  });

  it('should find 1, array with no pairs', () => {
    expect(oddOccurrencesInArray([1])).toEqual(1);
  });

  it('should find 8, array with a lot equals pairs', () => {
    expect(oddOccurrencesInArray([8,1,1,1,1,1,1,1,1])).toEqual(8);
  });
})
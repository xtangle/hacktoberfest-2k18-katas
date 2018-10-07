import { smallestPositiveNonOccurence } from './smallestPositiveNonOccurence';

describe('smallestPositiveNonOccurence', () => {
  it('should work with only positives in the list', () => {
    expect(smallestPositiveNonOccurence([1, 3, 4, 5])).toEqual(2);
  });

  it('should work with negatives in the list', () => {
    expect(smallestPositiveNonOccurence([-1, -2, -3])).toEqual(0);
  });

  it('should work with zeroes in the list', () => {
    expect(smallestPositiveNonOccurence([0, -1])).toEqual(1);
  });

  it('should work when elements repeat', () => {
    expect(smallestPositiveNonOccurence([3, 1, 2, 1])).toEqual(4);
  });
});

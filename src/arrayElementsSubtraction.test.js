import { arrayElementsSubtraction } from './arrayElementsSubtraction';

describe('arrayElementsSubtraction', () => {
  it('should return difference between 2 arrays elements as a separate array', () => {
    expect(arrayElementsSubtraction([1, 2, 3, 4], [1, 2, 3, 4])).toEqual([0, 0, 0, 0]);
  });
  it('should return difference between 2 arrays elements as a separate array', () => {
    expect(arrayElementsSubtraction([0, 0, 0, 0], [1, 2, 3, 4])).toEqual([-1, -2, -3, -4]);
  });
  it('should return difference between 2 arrays elements as a separate array', () => {
    expect(arrayElementsSubtraction([-1, -2, -3, -4], [1, 2, 3, 4])).toEqual([-2, -4, -6, -8]);
  });
  it('should throw error on unequal arrays or non numeric array', () => {
    expect(() => arrayElementsSubtraction(['1', '2', '3', '4'], ['a', 'b', 'c'])).toThrow();
  });
})
import { arrayRightRotate } from './arrayRightRotate';

describe('arrayRightRotate', () => {
  it('Right rotate [1, 2, 3, 4, 5] four times should return [2, 3, 4, 5, 1].', () => {
    expect(arrayRightRotate([1, 2, 3, 4, 5], 4)).toEqual([2, 3, 4, 5, 1]);
  });

  it('Right rotate [5, 6, 3, 4] two times should return [3, 4, 5, 6].', () => {
    expect(arrayRightRotate([5, 6, 3, 4], 2)).toEqual([3, 4, 5, 6]);
  });

  it('Return null if first parameter is not an array.', () => {
    expect(arrayRightRotate('Hello World!', 2)).toEqual(null);
  });
});

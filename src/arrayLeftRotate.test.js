import { arrayLeftRotate } from './arrayLeftRotate';

describe('arrayLeftRotate', () => {
  it('left rotate [1, 2, 3, 4, 5] four times should return [5, 1, 2, 3, 4]', () => {
    expect(arrayLeftRotate([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
  });

  it('left rotate [5, 6, 3, 4] two times should return [3, 4, 5, 6]', () => {
    expect(arrayLeftRotate([5, 6, 3, 4], 2), 2).toEqual([3, 4, 5, 6]);
  });

  it("return null if first parameter is not array", () => {
    expect(arrayLeftRotate("hello", 3)).toEqual(0);
  });
})
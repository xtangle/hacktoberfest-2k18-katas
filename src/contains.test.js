import { contains } from './contains';

describe('contains', () => {
  let arr = [1, 2, 3, 4, 5, 6];
  it('should return true', () => {
    expect(contains(arr, 3)).toEqual(true);
  });
  it('should return false', () => {
    expect(contains(arr, 7)).toEqual(false);
  })
});